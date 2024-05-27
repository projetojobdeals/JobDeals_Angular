import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent } from './pages/about/about.component';
import { AnalysisComponent } from './pages/analysis/analysis.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CopyrightComponent } from './pages/copyright/copyright.component';
import { HelpCenterComponent } from './pages/help-center/help-center.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './pages/terms-of-use/terms-of-use.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { VacanciesPageComponent } from './pages/vacancies-page/vacancies-page.component';
import { VacancyCardComponent } from './pages/vacancy-card/vacancy-card.component';
import { PopUpComponent } from './pages/pop-up/pop-up.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';

import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { HomeComponent } from './pages/home/home.component';
import { IndexComponent } from './pages/index/index.component';
import { HomeCompanyComponent } from './pages/home-company/home-company.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    AboutComponent,
    AnalysisComponent,
    ContactUsComponent,
    CopyrightComponent,
    HelpCenterComponent,
    LoginComponent,
    HomePageComponent,
    LandingPageComponent,
    PricingComponent,
    PrivacyPolicyComponent,
    TermsOfUseComponent,
    SignupPageComponent,
    VacanciesPageComponent,
    VacancyCardComponent,
    PopUpComponent,
    ProfileComponent,
    SettingsPageComponent,
    AuthenticationComponent,
    HomeComponent,
    IndexComponent,
    HomeCompanyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
