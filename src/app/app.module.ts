import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './structure/footer/footer.component';
import { NavbarComponent } from './structure/navbar/navbar.component';
import { AboutComponent } from './pages/about/about.component';
import { AnalysisComponent } from './pages/analysis/analysis.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CopyrightComponent } from './pages/copyright/copyright.component';
import { HelpCenterComponent } from './pages/help-center/help-center.component';
import { LoginComponent } from './pages/login/login.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ProfileCompanyComponent } from './pages/profile-company/profile-company.component';
import { ProfileCandidateComponent } from './pages/profile-candidate/profile-candidate.component';
import { TermsOfUseComponent } from './pages/terms-of-use/terms-of-use.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

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
    ProfileCompanyComponent,
    ProfileCandidateComponent,
    TermsOfUseComponent,
    SignupPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
