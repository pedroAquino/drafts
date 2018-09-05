import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { BookComponent } from './book/book.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, BookComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
