import { Resolver, Query, Args } from '@nestjs/graphql';
import { FileService } from './file.service';
import { FileContent } from './file.dto';

@Resolver()
export class FileResolver {
  constructor(private readonly fileService: FileService) {}

  @Query(() => FileContent)
  async getFileContent(
    @Args('filename') filename: string,
  ): Promise<FileContent> {
    const data = await this.fileService.readFileFromDesktop(filename);
    return { data };
  }
}
