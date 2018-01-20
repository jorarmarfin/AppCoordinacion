import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { AppServiceProvider } from '../../providers/app-service/app-service';
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
  constructor(public navCtrl: NavController, public navParams: NavParams,public AppService: AppServiceProvider, public actionSheetCtrl: ActionSheetController) {
  }

  ionViewWillEnter() {
    this.AppService.getDataIngresos().subscribe((data)=>{
      this.Ingresos = data;
    });
  }
  mostrarIngresos(){
  	this.AppService.getDataIngresos().subscribe((data)=>{
      this.Ingresos = data;
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
