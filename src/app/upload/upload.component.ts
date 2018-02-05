import {Component, OnInit} from '@angular/core';
import {Media} from '../interfaces/media';
import {MediaService} from '../services/media.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  file: File;
  media: Media = {
    title: '',
    description: ''
  };

  constructor(private mediaService: MediaService) {
  }

  setFile(evt) {
    console.log(evt.target.files[0]);
    this.file = evt.target.files[0];
  }

  startUpload() {
    // create FormData object
    // add title and description to FormData object
    // add file to FormData object
    // send FormData object to API
    const formData: FormData = new FormData();
    formData.append('title', this.media.title);
    formData.append('description', this.media.description);
    formData.append('file', this.file);
    this.mediaService.upload(formData).subscribe(response => {
      console.log(response);
    }, (error3: HttpErrorResponse) => {
      console.log(error3.error.message);
    });
  }

  ngOnInit() {
  }

}
