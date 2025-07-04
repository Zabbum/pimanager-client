import {Component, OnInit} from '@angular/core';
import {FileService} from '../services/file-service';
import {FilesDirs} from '../models/file-model';
import {
  MatCard,
  MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardTitle
} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-files-view',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardActions,
    MatButton,
    MatCardContent,
    MatIconModule,
    MatCardAvatar
  ],
  templateUrl: './files-view.html',
  styleUrl: './files-view.css'
})
export class FilesView implements OnInit {
  protected content: FilesDirs | undefined

  constructor(private fileService: FileService) {
  }

  protected basename(filePath: string) {
    return filePath.split('/').pop()?.split('\\').pop() || '';
  }

  ngOnInit(): void {
    this.fileService.getFiles().subscribe(content => this.content = content)
  }
}
