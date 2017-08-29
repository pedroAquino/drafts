import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  public carros;

   constructor(
     public navCtrl: NavController,
     private _http: Http,
     private _loadingCtrl: LoadingController,
     private _alertCtrl: AlertController) {}

  ngOnInit() {
    let loader = this._loadingCtrl.create({
      content: 'Carregando...'
    });

    loader.present();

    this._http
      .get('https://aluracar.herokuapp.com/')
      .map(result => result.json())
      .toPromise()
      .then(data => this.carros = data)
      .catch(error => {
        this._alertCtrl.create({
          message: 'Houve um erro de comunicação com o servidor.',
          buttons: [{ text: 'Estou ciente !' }]
        }).present()
      })
      .then(() => loader.dismiss());
  }

  seleciona(carro) {
    console.log(carro);
  }
}
