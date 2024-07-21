// file.service.ts
import { Injectable } from '@nestjs/common';
import { readFile } from 'fs/promises';
import { join } from 'path';

@Injectable()
export class FileService {
  async readFileFromDesktop(filename: string): Promise<any> {
    const desktopPath = join('/Users/yp/Desktop', filename);
    const fileContent = await readFile(desktopPath, 'utf8');
    return JSON.parse(fileContent);
  }
}
