import { Component } from '@angular/core';
import { ModalController, ViewController, NavController, NavParams } from 'ionic-angular';
import { AppServiceProvider } from '../../providers/app-service/app-service';
import { AppResourceProvider } from '../../providers/app-resource/app-resource';


@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {
	Eventos: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public AppService: AppServiceProvider, public AppResource: AppResourceProvider,
    public modalCtrl: ModalController) {
  }
  ionViewDidEnter(){
    this.AppResource.presentLoading('Cargando...');
    this.mostrarEventos();
  }
  mostrarEventos(){
  	this.AppService.getDataService('/api/emanuel/eventos.json').subscribe((data)=>{
      this.Eventos = data;
      this.AppResource.loader.dismiss();
    });
  }
  openModal(characterNum) {
    let modal = this.modalCtrl.create(EventoPage, characterNum);
    modal.present();
  }
}

@Component({
  templateUrl: 'evento.html',
})
export class EventoPage {
	Evento: any={title:'',field_fecha:'',field_contenido:''};
  url:string;
  constructor(public viewCtrl: ViewController, public navParams: NavParams,
  	public AppService: AppServiceProvider) {

    this.url = '/api/emanuel/id/'+this.navParams.get('charNum')+'/evento.json';

    this.AppService.getDataServiceById(this.url).subscribe((data)=>{
      this.Evento = data[0];
    });
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}