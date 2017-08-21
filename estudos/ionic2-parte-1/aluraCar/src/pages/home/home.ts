import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public carros;

   constructor(
     public navCtrl: NavController,
     private _http: Http,
     private _loadingCtrl: LoadingController) {

      let loader = this._loadingCtrl.create({
        content: 'Carregando...'
      });

      loader.present();

      this._http
        .get('https://aluracar.herokuapp.com/')
        .map(result => result.json())
        .toPromise()
        .then(data => this.carros = data)
        .then(() => loader.dismiss());
  }
}
