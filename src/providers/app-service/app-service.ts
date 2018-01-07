import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppServiceProvider {
	//url_hermanos_api:string = 'https://randomuser.me/api/?results=25';
	url_hermanos_api:string = 'http://coordinacion.sahost.com.pe/wsdl/emanuel/hermanos.json';

  constructor(public http: Http) {
  }
  getDataHermanos() {
      return this.http.get(this.url_hermanos_api).map(res => res.json());
  }



}
