import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { defineCustomElements } from '@simplecomponents/esm/loader';
import { NumericValueAccessor } from '../directives/number-value-accessor';
import {
  SimpleProgressbar
} from '../directives/proxies';
import { AppComponent } from './app.component';


defineCustomElements(window);

const DECLARATIONS = [
  // proxies
  SimpleProgressbar,
  AppComponent,
  
  // Value Accessors
  NumericValueAccessor,
];


@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
