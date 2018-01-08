import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppServiceProvider {
	url_web = 'http://coordinacion.sahost.com.pe'
	url_hermanos_api:string = this.url_web+'/api/emanuel/hermanos.json';
	url_temas_api:string = this.url_web+'/api/emanuel/temas.json';

  constructor(public http: Http) {
  }
  getDataHermanos() {
      return this.http.get(this.url_hermanos_api).map(res => res.json());
  }
  getDataHermano(id) {
  	console.log(this.url_web+'/api/emanuel/id/'+id+'/hermano.json');
      return this.http.get(this.url_web+'/api/emanuel/id/'+id+'/hermano.json').map(res => res.json());
  }
  getDataTemas() {
      return this.http.get(this.url_temas_api).map(res => res.json());
  }



}
