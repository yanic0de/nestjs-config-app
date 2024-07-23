import { Test, TestingModule } from '@nestjs/testing';
import { FileResolver } from './file.resolver';
import { FileService } from './file.service';

describe('FileResolver', () => {
  let resolver: FileResolver;
  let fileService: FileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FileResolver,
        {
          provide: FileService,
          useValue: {
            readFileFromDesktop: jest.fn(),
          },
        },
      ],
    }).compile();

    resolver = module.get<FileResolver>(FileResolver);
    fileService = module.get<FileService>(FileService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should return file content', async () => {
    const fileContent = { key: 'value' }; // ожидаемое содержимое файла

    jest
      .spyOn(fileService, 'readFileFromDesktop')
      .mockResolvedValue(fileContent);

    const result = await resolver.getFileContent();

    expect(result).toEqual({ data: fileContent });
    expect(fileService.readFileFromDesktop).toHaveBeenCalled();
  });
});
