import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ExibicaoComponent } from './exibicao/exibicao.component';

import { routing  } from './app.routes';
import { AnimacaoComponent } from './animacao/animacao.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ExibicaoComponent,
    AnimacaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
