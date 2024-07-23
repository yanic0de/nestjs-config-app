import { Resolver, Query } from '@nestjs/graphql';
import { FileService } from './file.service';
import { FileContent } from './file.dto';

@Resolver()
export class FileResolver {
  constructor(private readonly fileService: FileService) {}

  @Query(() => FileContent)
  async getFileContent(): Promise<FileContent> {
    const data = await this.fileService.readFileFromDesktop();
    return { data };
  }
}
