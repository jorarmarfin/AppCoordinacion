import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { AppServiceProvider } from '../../providers/app-service/app-service';
import { AppResourceProvider } from '../../providers/app-resource/app-resource';
import { AddIngresoPage } from '../add-ingreso/add-ingreso';
import { EditIngresoPage } from '../edit-ingreso/edit-ingreso';


@IonicPage()
@Component({
  selector: 'page-ingresos',
  templateUrl: 'ingresos.html',
})
export class IngresosPage {
  Ingresos: any;
	Ingreso: any= {action:'',nid:''};
  addingPage = AddIngresoPage;
	editingPage = EditIngresoPage;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public AppService: AppServiceProvider,  public AppResource:AppResourceProvider,
    public actionSheetCtrl: ActionSheetController ) {
  }

  ionViewDidLoad() {
    this.AppResource.presentLoading('Cargando...');
    this.mostrar();
    this.AppResource.loader.dismiss();
  }
  ionViewWillEnter() {
    this.mostrar();
  }
  mostrar(){
    this.AppService.getDataService('/api/emanuel/ingresos.json').subscribe((data)=>{
      if(data.length > 0) {
        this.Ingresos = data;
      }
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
            this.navCtrl.push(EditIngresoPage,{nid:nid});
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
            this.AppService.deleteData(this.Ingreso);
          }
        }
      ]
    });
    actionSheet.present();
  }

}
