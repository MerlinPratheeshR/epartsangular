import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './user-pages/contact/contact.component';
import { ForgotPasswordComponent } from './user-pages/forgot-password/forgot-password.component';
import { HomeComponent } from './user-pages/home/home.component';
import { NavigationComponent } from './user-pages/navigation/navigation.component';
import { PricingComponent } from './user-pages/pricing/pricing.component';
import { ResetPasswordComponent } from './user-pages/reset-password/reset-password.component';

const routes: Routes =

  [
    { path: '', redirectTo: 'navigation', pathMatch: 'full' },
    {
      path: 'navigation', component: NavigationComponent, children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'contact', component: ContactComponent },
        { path: 'pricing', component: PricingComponent },
      ]
    },
    { path: 'home', component: LandingComponent },
    { path: 'login', component: LoginComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'reset-password', component: ResetPasswordComponent },

    {
      path: 'admin',
      loadChildren: () => import('./module/admin/admin.module').then(m => m.AdminModule)
    },

    {
      path: 'buyer',
      loadChildren: () => import('./module/buyer/buyer.module').then(m => m.BuyerModule)
    },

    {
      path: 'seller',
      loadChildren: () => import('./module/seller/seller.module').then(m => m.SellerModule)
    }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
