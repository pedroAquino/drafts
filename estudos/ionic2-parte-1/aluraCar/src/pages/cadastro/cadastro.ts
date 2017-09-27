import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Carro } from '../../domain/carro/carro';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';
import { Agendamento } from '../../domain/agendamento/agendamento';
import { AgendamentoService } from '../../domain/agendamento/agendamento.service';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html'
})
export class CadastroPage {

  public carro: Carro;
  public precoTotal: number;
  public agendamento: Agendamento;

 private alerta = this._alertCtrl.create({
    title: 'Aviso',
    buttons: [{ 
      text: 'Ok',
      handler: () => this.navCtrl.setRoot(HomePage) 
    }]
  });

  constructor(public navCtrl: NavController,
      public navParams: NavParams,
      private _http: Http,
      private _alertCtrl: AlertController,
      private _agendamentoService: AgendamentoService) {

    this.carro = this.navParams.get('carro');
    this.precoTotal = this.navParams.get('precoTotal');
    this.agendamento = new Agendamento(this.carro, this.precoTotal);
  }

  agenda() {

    if(!this.agendamento.nome || 
      !this.agendamento.data || 
      !this.agendamento.email || 
      !this.agendamento.endereco) {
        this._alertCtrl.create({
          title: 'Aviso',
          subTitle: 'Dados inválidos !',
          buttons: [{ 
            text: 'Ok'
          }]
        }).present();
        return;
    }

    this._agendamentoService
      .agenda(this.agendamento)
      .then(result => {
        result ?
          this.alerta.setSubTitle('Sucesso !') :
          this.alerta.setSubTitle('Erro !');
        this.alerta.present();
      });

  }

}
