import { Test, TestingModule } from '@nestjs/testing';
import { SkinService } from './skin.service';
import { SkinSchema } from '../schemas/skin.schema';

describe('SkinService', () => {
  let service: SkinService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: SkinService,
          useValue: {
            getAllSkins: jest.fn().mockResolvedValue([
              { name: ' Test Cat 2', breed: 'Test Breed 2', age: 3 },
              { name: 'Test Cat 3', breed: 'Test Breed 3', age: 2 },
            ]),
          }
        }
      ],
    }).compile();

    service = module.get<SkinService>(SkinService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should load skin data from file', async () => {
    const result = await service.getAllSkins()
    console.log(result)
    expect(result).toMatchObject({a:2})
    // Implement this test to verify that data is loaded correctly
    // You can use jest.mock to mock the fs module and control the file data
  });

  it('should validate and sanitize skin data', () => {
    // Implement this test to verify that the validation and sanitization work as expected
  });

  it('should retrieve skin data', () => {
    // Implement this test to verify that the getAllSkins method returns the expected data
  });
});
