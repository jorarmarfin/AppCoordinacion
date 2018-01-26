import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppServiceProvider } from '../../providers/app-service/app-service';
import { AppResourceProvider } from '../../providers/app-resource/app-resource';

import { Http, Headers, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@IonicPage()
@Component({
  selector: 'page-edit-ingreso',
  templateUrl: 'edit-ingreso.html',
})
export class EditIngresoPage {
	nid:any;
	url: string;
	data_form:any = {action:'',nid:'',tipo:'ingreso',fecha: '', monto: ''};
	postParams:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public AppResource: AppResourceProvider,public AppService: AppServiceProvider,
  	public http: Http) {
  }
  ionViewDidLoad() {
  	this.nid = this.navParams.get('nid');
  	this.url = '/api/emanuel/id/'+this.nid+'/ingreso.json';

    this.AppService.getDataServiceById(this.url).subscribe((data)=>{
      this.data_form = data[0];
      this.data_form.nid = data[0]['nid'];
      this.data_form.fecha = data[0]['field_fecha'];
      this.data_form.monto = data[0]['field_monto'];
    });
  }
  save(){
    this.AppResource.presentLoading('Guardando...');
    this.postParams = {
      action: {value: 'U'},
      nid: {value: this.data_form.nid},
      monto: {value: this.data_form.monto},
      fecha: {value: this.data_form.fecha}
    }
    this.setData();
  }
  setData(){
    console.log(this.postParams);
	 this.http.get(this.AppService.token_api).subscribe(data_token => {
	   var headers = new Headers();
	   headers.append('Content-Type', 'application/hal+json' );
	   headers.append('X-CSRF-Token', data_token['_body'] );
	   headers.append('Authorization', this.AppService.autorizacion_api);
	   let options = new RequestOptions({ headers: headers, method: 'post' });

	  this.http.post(this.AppService.url_gestion_nodo, this.postParams, options).subscribe(response => {
	    if(response['_body'] != '0'){
	      this.AppResource.loader.dismiss();
	      this.navCtrl.pop();
	    }
	  },
	  error_myapi => {
	      console.log(error_myapi);
	    });
	  },
	  error => {
	    console.log(error);
	  });
  }

}
