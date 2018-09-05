import { Component, OnInit } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';

import { Carro } from '../../domain/carro/carro';
import { Acessorio } from '../../domain/carro/acessorio';

@Component({
    templateUrl: 'escolha.html'
})
export class EscolhaPage implements OnInit {

    public carro: Carro;
    public acessorios: Acessorio[];
    private _precoTotal: number;

    constructor(private _navParams: NavParams, private _navCtrl: NavController) {
        
        this.carro = this._navParams.get('carroSelecionado');
        this._precoTotal = this.carro.preco;

        this.acessorios = [
            { nome: 'Freio ABS', preco: 800 },
            { nome: 'Ar-condicionado', preco: 1000 },
            { nome: 'MP3 Player', preco: 500 }
        ];
    }

    get precoTotal() {
        return this._precoTotal;
    }

    onToggleChange(toggleChecked: boolean, acessorio: Acessorio) {
        toggleChecked ?
            this._precoTotal += acessorio.preco :
            this._precoTotal -= acessorio.preco;
    }

    ngOnInit() {
        console.log(this.carro);
    }

    avancarNoAgendamento() {
        this._navCtrl.push(CadastroPage, {
            carro: this.carro,
            precoTotal: this.precoTotal
        });
    }
}