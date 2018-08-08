import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FileUploader } from '../../../node_modules/ng2-file-upload';
import { QuillModule } from '../../../node_modules/ngx-quill';
import { TranslationWidth } from '../../../node_modules/@angular/common';
import { Article } from '../shared/classes/class';
import { AppService } from '../app.service';
import { DialogService, BuiltInOptions } from '../../../node_modules/ngx-bootstrap-modal';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  aa: any;
  module: QuillModule;
  public uploader2: FileUploader;
  article: Article;
  constructor(private appService: AppService, private dialogService: DialogService ) {

   }
  ngOnInit() {
    this.article = new Article;
    // this.uploader2 = new FileUploader({
    //   url: 'http://localhost:56691/api/Resource/addFile',
    //   method: 'POST',
    //   itemAlias: 'uploadedfile'
    // });
  }

  gettext(event) {
    console.log('11');
    console.log(event);

  }

  // success(item, response, status, headers) {
  //   if (status === 200) {
  //     const rsp = JSON.parse(response);
  //     const img = '<img class="camera" src="' + 'http://您的域名' + rsp.url + '" alt="">';
  //     // that.data.content += img;
  //   }
  // }
  save() {
    console.log(this.article);
    this.appService.addArtical(this.article).subscribe(response => {
      console.log(response);
      if (response.Success) {
        this.dialogService.show(<BuiltInOptions>{
          content: '保存成功',
          icon: 'success',
          size: 'sm',
          showCancelButton: false,
          timeout: 2000,
          showConfirmButton: false
      });
      this.article = new Article();
      } else {
        this.dialogService.show(<BuiltInOptions>{
          content: '保存失败<br>' + response.AllMessages,
          icon: 'error',
          size: 'sm',
          showCancelButton: false,
          timeout: 2000,
          showConfirmButton: false
      });
      }

    });
  }
  onContentChanged(event) {

    this.article.Text = event.html;
    console.log(event);

  }

}
