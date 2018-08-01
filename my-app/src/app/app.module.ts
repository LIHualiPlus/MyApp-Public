import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule} from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SummaryComponent } from './shared/summary/summary.component';
import { HomeComponent } from './home/home/home.component';
import { MyCarouselComponent } from './shared/carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    HomeComponent,
    MyCarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
