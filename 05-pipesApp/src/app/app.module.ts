import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

//Configuracion del locale de la app
import localeEsPE from '@angular/common/locales/es-PE'
import localeFrCa from '@angular/common/locales/fr-CA'

import { registerLocaleData } from '@angular/common';

registerLocaleData ( localeEsPE );
registerLocaleData ( localeFrCa );



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-PE'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
