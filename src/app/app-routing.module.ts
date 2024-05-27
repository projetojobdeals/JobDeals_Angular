import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AuthGuard } from './account/shared/auth.guard';

import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AboutComponent } from './pages/about/about.component';
import { AnalysisComponent } from './pages/analysis/analysis.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CopyrightComponent } from './pages/copyright/copyright.component';
import { HelpCenterComponent } from './pages/help-center/help-center.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/login/login.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { TermsOfUseComponent } from './pages/terms-of-use/terms-of-use.component';
import { VacanciesPageComponent } from './pages/vacancies-page/vacancies-page.component';
import { PopUpComponent } from './pages/pop-up/pop-up.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { HomeComponent } from './pages/home/home.component';
import { IndexComponent } from './pages/index/index.component';
import { AccountService } from './account/shared/account.service';
import { HomeCompanyComponent } from './pages/home-company/home-company.component';
import { ProfileCompanyComponent } from './pages/profile-company/profile-company.component';

const routes: Routes = [
  { path: '', 
    component: IndexComponent,
    children: [
      { path: '', component: LandingPageComponent},
      { path: 'about', component: AboutComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'copyright', component: CopyrightComponent },
      { path: 'help-center', component: HelpCenterComponent },
      { path: 'pricing', component: PricingComponent },
      { path: 'privacy-policy', component: PrivacyPolicyComponent },      
      { path: 'terms-of-use', component: TermsOfUseComponent },
    ]
  },
  { path: '', 
  component: HomeComponent,
  children: [
    { path: 'home', component: HomePageComponent},      
    { path: 'vacancies-page', component: VacanciesPageComponent},
    { path: 'pop-up', component: PopUpComponent, data: { canShow: false } },
    { path: 'profile', component: ProfileComponent},
    { path: 'settings-page', component: SettingsPageComponent},
    { path: 'home-company', component: HomeCompanyComponent},      
    { path: 'profile-company', component: ProfileCompanyComponent},
  ],
  canActivate: [AuthGuard]
  },
  { path: '', 
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'signup-page', component: SignupPageComponent },
      { path: 'analysis', component: AnalysisComponent },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})
export class AppRoutingModule {}
