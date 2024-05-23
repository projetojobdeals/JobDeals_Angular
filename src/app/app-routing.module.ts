import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'analysis', component: AnalysisComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'copyright', component: CopyrightComponent },
  { path: 'help-center', component: HelpCenterComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'login', component: LoginComponent, data: { canShow: false } },
  { path: 'pricing', component: PricingComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'signup-page', component: SignupPageComponent, data: { canShow: false }  },
  { path: 'terms-of-use', component: TermsOfUseComponent },
  { path: 'vacancies-page', component: VacanciesPageComponent},
  { path: 'pop-up', component: PopUpComponent, data: { canShow: false } },
  { path: 'profile', component: ProfileComponent},
  { path: 'settings-page', component: SettingsPageComponent},
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
