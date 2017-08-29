import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
    templateUrl: 'escolha.html'
})
export class EscolhaPage implements OnInit {

    public carro: any;

    constructor(private _navParams: NavParams) {
        this.carro = this._navParams.get('carroSelecionado');
    }

    ngOnInit() {
        console.log(this.carro);
    }
}