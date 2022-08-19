import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

// material ui
import { LayoutModule } from '@angular/cdk/layout';
import { AngularMaterialModule } from './angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ThemeTogglerComponent } from './components/theme-toggler/theme-toggler.component';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';
import { MatDialogModule } from '@angular/material/dialog';
import { InformaticsComponent } from './routes/informatics/informatics.component';


import { ContentSectionComponent } from './components/content-section/content-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { MathComponent } from './routes/math/math.component';
import { HomeComponent } from './routes/home/home.component';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { AuthInterceptor } from 'src/services/auth-interceptor';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { QuizComponent } from './routes/quiz/quiz.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { ImpressumComponent } from './routes/impressum/impressum.component';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  NgcCookieConsentConfig,
  NgcCookieConsentModule,
} from 'ngx-cookieconsent';
import { ComponentNavComponent } from './components/component-nav/component-nav.component';
import { PageNotFoundComponent } from './routes/page-not-found/page-not-found.component';
import { DerivateComponent } from './routes/math/derivate/derivate.component';
import { IntegralComponent } from './routes/math/integral/integral.component';
import { MathOverviewComponent } from './routes/math/math-overview/math-overview.component';
import { InformaticsOverviewComponent } from './routes/informatics/informatics-overview/informatics-overview.component';
import { AussagenlogikComponent } from './routes/informatics/aussagenlogik/aussagenlogik.component';
import { PraedikatenlogikComponent } from './routes/informatics/praedikatenlogik/praedikatenlogik.component';
import { EndlicheAutomatenComponent } from './routes/informatics/endliche-automaten/endliche-automaten.component';
import { UnixComponent } from './routes/informatics/unix/unix.component';
import { InformaticsNavComponent } from './components/informatics-nav/informatics-nav.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: 'localhost', // or 'your.domain.com' // it is mandatory to set a domain, for cookies to work properly (see https://goo.gl/S2Hy2A)
  },
  palette: {
    popup: {
      background: '#000',
    },
    button: {
      background: '#f1d600',
    },
  },
  theme: 'edgeless',
  type: 'opt-out',
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ThemeTogglerComponent,
    LanguageSwitcherComponent,
    ContentSectionComponent,
    FooterComponent,
    MathComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    QuizComponent,
    HeroSectionComponent,
    GetStartedComponent,
    ImpressumComponent,
    InformaticsComponent,
    ComponentNavComponent,
    PageNotFoundComponent,
    DerivateComponent,
    IntegralComponent,
    MathOverviewComponent,
    InformaticsOverviewComponent,
    AussagenlogikComponent,
    PraedikatenlogikComponent,
    EndlicheAutomatenComponent,
    UnixComponent,
    InformaticsNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    AngularMaterialModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    VgControlsModule,
    NgcCookieConsentModule.forRoot(cookieConfig),
    CommonModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    Title,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
