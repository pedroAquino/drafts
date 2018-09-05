import { Component, OnInit } from '@angular/core';
import { DadosService } from "../dados.service";
import { FormularioComponent } from "../formulario/formulario.component";

@Component({
  selector: 'app-exibicao',
  templateUrl: './exibicao.component.html',
  styleUrls: ['./exibicao.component.css']
})
export class ExibicaoComponent implements OnInit {

  formulario: FormularioComponent
  dados: DadosService;

  constructor(dados: DadosService) { 
    this.dados = dados;
  }

  ngOnInit() {
    this.formulario = this.dados.formulario;
  }

}
