import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// Modulo Personalizado
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

// Cambiar el "locale" de al app (idioma español)
import localEsGT from '@angular/common/locales/es-GT'
import localFr from '@angular/common/locales/fr'
import { registerLocaleData } from '@angular/common';
import { PrimeNgModule } from './prime-ng/prime-ng.module';

registerLocaleData( localEsGT );
registerLocaleData( localFr );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-GT' } // Cambiar el idioma global de la app
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
