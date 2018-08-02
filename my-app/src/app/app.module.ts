import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule} from 'ngx-bootstrap';

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


@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    HomeComponent,
    MyCarouselComponent,
    NoticeComponent,
    HotsummaryComponent,
    DetailComponent,
    LifeshowComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
