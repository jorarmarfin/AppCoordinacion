import { Component } from '@angular/core';
import { ModalController, ViewController, NavController, NavParams } from 'ionic-angular';
import { AppServiceProvider } from '../../providers/app-service/app-service';


@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {
	Eventos: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public AppService: AppServiceProvider,public modalCtrl: ModalController) {
  }
  ionViewDidEnter(){
    this.mostrarEventos();
  }
  mostrarEventos(){
  	this.AppService.getDataEventos().subscribe((data)=>{
      this.Eventos = data;
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
  constructor(public viewCtrl: ViewController, public navParams: NavParams,
  	public AppService: AppServiceProvider) {
  	this.AppService.getDataEvento(this.navParams.get('charNum')).subscribe((data)=>{
      this.Evento = data[0];
    });
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}