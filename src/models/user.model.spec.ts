import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserModel } from '@Models/user.model'; // Your User model

const mockRepository = {
    findOne() {
      return {};
    }
  };

describe('User Model', () => {
  let userModel: Model<User>;
  const sampleUserData = {
    username: 'testuser',
    email: 'testuser@example.com',
    password: 'password123',
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: getModelToken(User.name), // Use the appropriate token for your model
          useValue: mockRepository,
        },
      ],
    }).compile();

    userModel = module.get<Model<User>>(getModelToken(User.name));
  });

  it('should be defined', () => {
    expect(userModel).toBeDefined();
  });

  it('should create a new user', async () => {
    const user = new userModel(sampleUserData);
    const result = await user.save();

    expect(result).toBeDefined();
    expect(result.username).toEqual(sampleUserData.username);
  });

  it('should find a user by username', async () => {
    const foundUser = await userModel.findOne({ username: sampleUserData.username });

    expect(foundUser).toBeDefined();
    expect(foundUser.email).toEqual(sampleUserData.email);
  });

  // afterAll(async () => {
  //   await userModel.deleteMany({});
  // });
});

