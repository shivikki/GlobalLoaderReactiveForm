import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public fileSub:any;
  selectFile(event :any){
    console.log("whole event",event);
    this.fileSub=event.target.files[0];
    console.log("File selected",this.fileSub);
  }

  uploadFile(){
    let formData=new FormData();
    formData.append("file",this.fileSub);

  }

}
