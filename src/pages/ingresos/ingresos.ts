import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { AppServiceProvider } from '../../providers/app-service/app-service';
import { AppResourceProvider } from '../../providers/app-resource/app-resource';
import { AddIngresoPage } from '../add-ingreso/add-ingreso';


@IonicPage()
@Component({
  selector: 'page-ingresos',
  templateUrl: 'ingresos.html',
})
export class IngresosPage {
  Ingresos: any;
	Ingreso: any= {action:'',nid:''};
	addingPage = AddIngresoPage;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public AppService: AppServiceProvider,  public AppResource:AppResourceProvider,
    public actionSheetCtrl: ActionSheetController ) {
  }

  ionViewWillEnter() {
    this.mostrar();
  }
  mostrar(){
    this.AppResource.presentLoading('Cargando...');
    this.AppService.getDataService('/api/emanuel/ingresos.json').subscribe((data)=>{
      if(data.length > 0) {
        this.Ingresos = data;
      }
    });
    this.AppResource.loader.dismiss();

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
            this.Ingreso.action='D';
            this.Ingreso.nid=nid;
            this.Ingresos = this.Ingresos.filter(i =>{
              return i.nid != nid;
            });
            this.AppService.deleteData(this.Ingreso)

          }
        }
      ]
    });
    actionSheet.present();
  }

}
