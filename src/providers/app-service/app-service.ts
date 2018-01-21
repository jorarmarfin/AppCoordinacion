import { Http, Headers, RequestOptions  } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppServiceProvider {
	url_web = 'http://coordinacion.sahost.com.pe'
  token_api: string = this.url_web+'/rest/session/token';
  autorizacion_api: string = 'Basic YWRtaW46cjJkMjNwb0x1aSQ=';
  url_gestion_nodo: string = this.url_web+"/api/gestion";
  data: any;

  constructor(public http: Http) {
  }
  getDataService(param) {
      return this.http.get(this.url_web+param).map(res => res.json());
  }
  getDataService2(param) {
      return this.http.get(this.url_web+param).map(res => res.json()).toPromise();
  }
  getDataServiceById(url) {
      return this.http.get(this.url_web+url).map(res => res.json());
  }
  setData(param){
    this.data = param;
     this.http.get(this.token_api).subscribe(data_token => {
       var headers = new Headers();
       headers.append('Content-Type', 'application/hal+json' );
       headers.append('X-CSRF-Token', data_token['_body'] );
       headers.append('Authorization', this.autorizacion_api);
       let options = new RequestOptions({ headers: headers, method: 'post' });
       let postParams = {
          action: {value: this.data.action},
          tipo: {value: this.data.tipo},
          monto: {value: this.data.monto},
          fecha: {value: this.data.fecha}
        }
      this.http.post(this.url_gestion_nodo, postParams, options).subscribe(response => {
        if(response['_body'] != '0'){
          this.data.monto='';
        }
      },
      error_myaip => {
          console.log(error_myaip);
        });
      },
      error => {
        console.log(error);
      });

  }
  deleteData(param){
    this.data = param;
     this.http.get(this.token_api).subscribe(data_token => {
       var headers = new Headers();
       headers.append('Content-Type', 'application/hal+json' );
       headers.append('X-CSRF-Token', data_token['_body'] );
       headers.append('Authorization', this.autorizacion_api);
       let options = new RequestOptions({ headers: headers, method: 'post' });
       let postParams = {
          action: {value: this.data.action},
          nid: {value: this.data.nid},
        }
      this.http.post(this.url_gestion_nodo, postParams, options).subscribe(response => {
        if(response['_body'] != '0'){
          this.data.field_monto = '';
          this.data.field_fecha = '';
        }
      },
      error_myaip => {
          console.log(error_myaip);
        });
      },
      error => {
        console.log(error);
      });
  }


}
