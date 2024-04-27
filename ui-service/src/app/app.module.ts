import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {COSMIC_THEME, DARK_THEME, DEFAULT_THEME, NbThemeModule} from '@nebular/theme';
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule.forRoot(),
    NbThemeModule.forRoot({name: 'default'}, [DEFAULT_THEME, DARK_THEME, COSMIC_THEME])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
