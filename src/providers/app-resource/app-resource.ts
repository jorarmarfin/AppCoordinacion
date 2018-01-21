import { LoadingController,AlertController } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class AppResourceProvider {
	loader:any;
	confirm:any;
  constructor(
  	public loadingCtrl: LoadingController,public alertCtrl: AlertController
  	) {
  }
  presentLoading(param){
  	this.loader = this.loadingCtrl.create({content: param});
    this.loader.present();
  }
  showConfirm() {
    this.confirm = this.alertCtrl.create({
      title: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    this.confirm.present();
  }




}
