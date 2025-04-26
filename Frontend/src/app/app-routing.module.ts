import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PredictComponent } from './predict/predict.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { ContactComponent } from './contact/contact.component';
import { CropsComponent } from './crops/crops.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact' , component: ContactComponent},
  { path: 'predict', component: PredictComponent },
  { path: 'recommended', component: RecommendedComponent },
  { path: 'crops', component: CropsComponent },
  { path: '**', redirectTo: '' }, // optional: wildcard route to redirect unknown paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
