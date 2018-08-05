import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { LifeshowComponent } from './lifeshow/lifeshow/lifeshow.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { TechnologyComponent } from './technology/technology/technology.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'lifes', component: LifeshowComponent  },
  {path: 'addarticle', component: AddArticleComponent },
  {path: 'technology', component: TechnologyComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
