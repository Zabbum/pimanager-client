import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FilesDirs} from '../models/file-model';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) {
  }

  getFiles(path?: string) {
    if (path) {
      return this.http.get<FilesDirs>(`/api/files?path=${encodeURIComponent(path)}`);
    }
    return this.http.get<FilesDirs>('/api/files');
  }
}
