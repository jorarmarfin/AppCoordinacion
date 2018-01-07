import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppServiceProvider } from '../../providers/app-service/app-service';

@IonicPage()
@Component({
  selector: 'page-hermanos',
  templateUrl: 'hermanos.html',
})
export class HermanosPage {
	Hermanos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public AppService: AppServiceProvider) {

  	this.AppService.getDataHermanos().subscribe((data)=>{
    	this.Hermanos = data;
    });
  }

  ionViewDidLoad() {

  }

}
