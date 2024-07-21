// file.module.ts
import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileResolver } from './file.resolver';
import { FileController } from './file.controller';

@Module({
  providers: [FileService, FileResolver],
  controllers: [FileController],
})
export class FileModule {}
