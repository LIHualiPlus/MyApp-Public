import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule} from 'ngx-bootstrap';
import { CommonModule } from '@angular/common';
import { FileUploadModule} from 'ng2-file-upload';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SummaryComponent } from './shared/summary/summary.component';
import { HomeComponent } from './home/home/home.component';
import { MyCarouselComponent } from './shared/carousel/carousel.component';
import { NoticeComponent } from './shared/notice/notice.component';
import { HotsummaryComponent } from './shared/hotsummary/hotsummary.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { AppService } from './app.service';
import { DetailComponent } from './shared/detail/detail.component';
import { LifeshowComponent } from './lifeshow/lifeshow/lifeshow.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { QuillModule } from '../../node_modules/ngx-quill';
import { TechnologyComponent } from './technology/technology/technology.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    HomeComponent,
    MyCarouselComponent,
    NoticeComponent,
    HotsummaryComponent,
    DetailComponent,
    LifeshowComponent,
    AddArticleComponent,
    TechnologyComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    QuillModule,
    HttpClientModule,
    CommonModule,
    FileUploadModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
