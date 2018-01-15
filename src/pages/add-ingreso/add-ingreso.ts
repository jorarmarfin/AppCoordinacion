import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppServiceProvider } from '../../providers/app-service/app-service';


@IonicPage()
@Component({
  selector: 'page-add-ingreso',
  templateUrl: 'add-ingreso.html',
})
export class AddIngresoPage {
	data_form:any = {fecha: '', monto: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams,public AppService: AppServiceProvider) {
  }

  ionViewDidLoad() {
  }
  save(){
  	this.AppService.setDataIngreso(this.data_form);
  	this.navCtrl.pop();
  }

}
