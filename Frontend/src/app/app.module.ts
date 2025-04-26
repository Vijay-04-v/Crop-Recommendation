import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';                // ✅ For ngModel
import { HttpClientModule } from '@angular/common/http';     // ✅ For HttpClient
import { AppRoutingModule } from './app-routing.module';     // ✅ Routing module

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PredictComponent } from './predict/predict.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { CropsComponent } from './crops/crops.component';
import { SignupComponent } from './signup/signup.component';
import { SiginComponent } from './sigin/sigin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PredictComponent,
    RecommendedComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    CropsComponent,
    SignupComponent,
    SiginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
