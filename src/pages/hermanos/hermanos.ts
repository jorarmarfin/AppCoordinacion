import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppServiceProvider } from '../../providers/app-service/app-service';
import { AppResourceProvider } from '../../providers/app-resource/app-resource';
import { VerHermanoPage } from '../ver-hermano/ver-hermano';

@IonicPage()
@Component({
  selector: 'page-hermanos',
  templateUrl: 'hermanos.html',
})
export class HermanosPage {
	Hermanos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public AppService: AppServiceProvider,public AppResource: AppResourceProvider) {

  }
  ionViewDidEnter(){
    this.AppResource.presentLoading('Cargando...');
    this.AppService.getDataService('/api/emanuel/hermanos.json').subscribe((data)=>{
      this.Hermanos = data;
    this.AppResource.loader.dismiss();
    });
  }
  DetalleHermano(item){
    this.navCtrl.push(VerHermanoPage,{id:item});
  }

}
