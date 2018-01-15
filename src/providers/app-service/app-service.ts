import { Http, Headers, RequestOptions  } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppServiceProvider {
	url_web = 'http://coordinacion.sahost.com.pe'
	url_hermanos_api:string = this.url_web+'/api/emanuel/hermanos.json';
  url_temas_api:string = this.url_web+'/api/emanuel/temas.json';
  url_eventos_api:string = this.url_web+'/api/emanuel/eventos.json';
  url_ingresos_api:string = this.url_web+'/api/emanuel/ingresos.json';
  token_api: string = "http://coordinacion.sahost.com.pe/rest/session/token";
  data: any;
  url_correo_feedback: string = "http://tpca.drinux.com/wsdl/feedback";

  constructor(public http: Http) {
  }
  getDataEventos() {
      return this.http.get(this.url_eventos_api).map(res => res.json());
  }
  getDataEvento(id) {
      return this.http.get(this.url_web+'/api/emanuel/id/'+id+'/eventos.json').map(res => res.json());
  }
  getDataHermanos() {
      return this.http.get(this.url_hermanos_api).map(res => res.json());
  }
  getDataHermano(id) {
      return this.http.get(this.url_web+'/api/emanuel/id/'+id+'/hermano.json').map(res => res.json());
  }
  getDataTemas() {
      return this.http.get(this.url_temas_api).map(res => res.json());
  }
  getDataIngresos() {
      return this.http.get(this.url_ingresos_api).map(res => res.json());
  }
  setDataIngreso(param){
    this.data = param;
     this.http.get(this.token_api).subscribe(data_token => {
       var headers = new Headers();
       headers.append('Content-Type', 'application/hal+json' );
       headers.append('X-CSRF-Token', data_token['_body'] );
       headers.append('Authorization', 'Basic YWRtaW46aG9sYXBlcnU=');
       let options = new RequestOptions({ headers: headers, method: 'post' });
       let postParams = {
          monto: {value: this.data.monto},
          fecha: {value: this.data.fecha}
        }
      this.http.post(this.url_correo_feedback, postParams, options).subscribe(response => {
        if(response['_body'] != '0'){
          this.data.name = '';
          this.data.mail = '';
          this.data.consulta = '';
        }
      },
      error_feedback => {
          console.log(error_feedback);
        });
      },
      error => {
        console.log(error);
      });

  }



}
