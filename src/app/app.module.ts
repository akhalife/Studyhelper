import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";

// material ui
import { LayoutModule } from '@angular/cdk/layout';
import { AngularMaterialModule } from './angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {ThemeTogglerComponent} from "./components/theme-toggler/theme-toggler.component";
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';
import {I18nModule} from "./core/i18n/i18n.module";
import {MatDialogModule} from '@angular/material/dialog'




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ThemeTogglerComponent,
    LoginFormComponent,
    LanguageSwitcherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [I18nModule.setLocale(), I18nModule.setLocaleId()],
  bootstrap: [AppComponent]
})
export class AppModule { }
