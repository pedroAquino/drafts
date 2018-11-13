import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailRegex, passwordRegex } from '../../services/regex.service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  credentialsForm: FormGroup;

  submited = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private formBuilder: FormBuilder) {
      
      this.credentialsForm = this.formBuilder.group({
        email: ['', Validators.compose([
          Validators.required,
          Validators.pattern(emailRegex)
        ])],
        password: ['', Validators.compose([
          Validators.required,
          Validators.pattern(passwordRegex)
        ])]
      });
  }

  ionViewDidLoad() {
  }

  onSignIn() {
    this.submited = true;

    if (!this.credentialsForm.valid) {
      return;
    }

    if (this.credentialsForm.controls['email'].value != 'geovana@mpc.com' ||
        this.credentialsForm.controls['password'].value != 'geovana1234') {
        this.showAlert('O email ou a senha não estão corretos.');
        return;
    }

    
  }

  onForgotPassword() {}

  onRegister() {}

  showAlert(message: string) {
    let alert = this.alertCtrl.create({
      title: 'Ops !',
      subTitle: message,
      buttons: ['Ok']
    });

    alert.present();
  }

}
