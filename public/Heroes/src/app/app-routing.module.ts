import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashbordComponent } from './dashbord/dashbord.component';
const router: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashbordComponent}
];

@NgModule({

  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(router)]
})


export class AppRoutingModule {
}
