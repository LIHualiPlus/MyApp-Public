import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SummaryComponent } from './shared/summary/summary.component';
import { HomeComponent } from './home/home/home.component';
import { CarouselComponent } from './shared/carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    HomeComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
