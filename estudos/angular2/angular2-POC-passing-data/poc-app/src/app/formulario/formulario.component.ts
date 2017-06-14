import { Component, OnInit } from '@angular/core';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  dados: DadosService;

  nome: string = "";
  sobrenome: string = "";

  constructor(dados: DadosService) { 
    this.dados = dados;

  }

  ngOnInit() {
  }

  salvar() {
    console.log(this);
    this.dados.formulario = this;
  }

}
