import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppServiceProvider } from '../../providers/app-service/app-service';
import { AddIngresoPage } from '../add-ingreso/add-ingreso';


@IonicPage()
@Component({
  selector: 'page-ingresos',
  templateUrl: 'ingresos.html',
})
export class IngresosPage {
	Ingresos: any;
	addingPage = AddIngresoPage;
  constructor(public navCtrl: NavController, public navParams: NavParams,public AppService: AppServiceProvider) {
  }

  ionViewDidEnter() {
    this.mostrarIngresos();
  }
  mostrarIngresos(){
  	this.AppService.getDataIngresos().subscribe((data)=>{
      this.Ingresos = data;
    });
  }

}
