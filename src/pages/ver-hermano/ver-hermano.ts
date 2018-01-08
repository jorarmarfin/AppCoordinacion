import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppServiceProvider } from '../../providers/app-service/app-service';

@IonicPage()
@Component({
  selector: 'page-ver-hermano',
  templateUrl: 'ver-hermano.html',
})
export class VerHermanoPage {
	idHermano: string;
	Hermano: any={title:'',field_telefonos:'',field_foto: '',nid:'',field_fecha:''};

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public AppService: AppServiceProvider) {
  	this.idHermano =this.navParams.get('id');

  	this.AppService.getDataHermano(this.idHermano).subscribe((data)=>{
      this.Hermano = data[0];
    });
  }

  ionViewDidLoad() {
  }

}
