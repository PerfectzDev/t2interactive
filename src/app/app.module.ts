import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NZ_I18N} from 'ng-zorro-antd/i18n';
import {en_US} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {HomeComponent} from "./components/home/home.component";
import {AppRoutingModule} from "./app-routing.module";
import {ContactUsComponent} from "./components/contact-us/contact-us.component";
import {HeaderComponent} from "./components/header/header.component";
import {NzCardModule} from "ng-zorro-antd/card";
import {OurProjectComponent} from "./components/our-project/our-project.component";
import {AboutUsComponent} from "./components/about/about-us.component";
import {NzGridModule} from "ng-zorro-antd/grid";
import {OurServiceComponent} from "./components/our-service/our-service.component";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    OurProjectComponent,
    OurServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzDropDownModule,
    NzCardModule,
    NzGridModule
  ],
  providers: [
    {provide: NZ_I18N, useValue: en_US}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
