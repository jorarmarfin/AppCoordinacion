import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ViewController } from 'ionic-angular';
import { AppServiceProvider } from '../../providers/app-service/app-service';
import { AppResourceProvider } from '../../providers/app-resource/app-resource';


@IonicPage()
@Component({
  selector: 'page-misa',
  templateUrl: 'misa.html',
})
export class MisaPage {
	Lista: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public AppService:AppServiceProvider, public actionSheetCtrl: ActionSheetController,
    public AppResource: AppResourceProvider) {
  	this.mostrar();
  }

  ionViewDidEnter() {
    this.mostrar();
  }
  mostrar(){
  	this.AppService.getDataService('/api/capilla/misas.json').subscribe((data)=>{
      this.Lista = data;
    });
  }
  openModal(){
    this.AppResource.openModalOnlyPage(AddMisaPage);
  }
  presentActionSheet(nid) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Que opción de sea realizar',
      buttons: [
        {
          text: 'Editar',
          icon: 'md-create',
          role: 'Editar',
          handler: () => {
            console.log('Destructive clicked'+nid);
          }
        },{
          text: 'Eliminar',
          icon: 'md-trash',
          handler: () => {
            console.log('Archive clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}

@Component({
  templateUrl: 'add-misa.html',
})
export class AddMisaPage {
  Evento: any={title:'',field_fecha:'',field_contenido:''};
  url:string;
  constructor(public navParams: NavParams, public viewCtrl: ViewController,
    public AppService: AppServiceProvider) {
    console.log('cargo add misa');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}