import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
    templateUrl: 'escolha.html'
})
export class EscolhaPage implements OnInit {

    public carro: any;
    public acessorios: any;

    constructor(private _navParams: NavParams) {
        this.carro = this._navParams.get('carroSelecionado');
        this.acessorios = [
            { nome: 'Freio ABS', preco: 800 },
            { nome: 'Ar-condicionado', preco: 1000 },
            { nome: 'MP3 Player', preco: 500 }
        ];
    }

    ngOnInit() {
        console.log(this.carro);
    }
}