import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { AppServiceProvider } from '../../providers/app-service/app-service';


@IonicPage()
@Component({
  selector: 'page-misa',
  templateUrl: 'misa.html',
})
export class MisaPage {
	Lista: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public AppService:AppServiceProvider, public actionSheetCtrl: ActionSheetController) {
  	this.mostrar();
  }

  ionViewDidEnter() {
    this.mostrar();
  }
  mostrar(){
  	this.AppService.getDataMisas().subscribe((data)=>{
      this.Lista = data;
    });
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
