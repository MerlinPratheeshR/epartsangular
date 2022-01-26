import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppSharedModule } from './app-shared/app-shared.module';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './user-pages/contact/contact.component';
import { ForgotPasswordComponent } from './user-pages/forgot-password/forgot-password.component';
import { HomeComponent } from './user-pages/home/home.component';
import { NavigationComponent } from './user-pages/navigation/navigation.component';
import { PricingComponent } from './user-pages/pricing/pricing.component';
import { ResetPasswordComponent } from './user-pages/reset-password/reset-password.component';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppSharedModule,
    LandingComponent,
    LoginComponent,
    ContactComponent,
    ForgotPasswordComponent,
    HomeComponent,
    NavigationComponent,
    PricingComponent,
    ResetPasswordComponent






  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
