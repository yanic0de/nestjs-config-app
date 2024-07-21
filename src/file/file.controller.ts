// file.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { FileService } from './file.service';

@Controller('files')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Get(':filename')
  async getFile(@Param('filename') filename: string): Promise<any> {
    return this.fileService.readFileFromDesktop(filename);
  }
}
