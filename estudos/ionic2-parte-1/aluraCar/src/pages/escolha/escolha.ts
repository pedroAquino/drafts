import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
    templateUrl: 'escolha.html'
})
export class EscolhaPage implements OnInit {

    public carro: any;
    public acessorios: any;
    private _precoTotal: number;

    constructor(private _navParams: NavParams) {
        
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

    onToggleChange(toggleChecked: boolean, acessorio: any) {
        toggleChecked ?
            this._precoTotal += acessorio.preco :
            this._precoTotal -= acessorio.preco;
    }

    ngOnInit() {
        console.log(this.carro);
    }
}