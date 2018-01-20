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
  url_misas_api:string = this.url_web+'/api/capilla/misas.json';
  url_mociones_api:string = this.url_web+'/api/emanuel/mociones.json';

  token_api: string = this.url_web+'/rest/session/token';
  autorizacion_api: string = 'Basic YWRtaW46cjJkMjNwb0x1aSQ=';

  url_gestion_nodo: string = this.url_web+"/api/gestion";
  data: any;
  resultado: any;
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
  getDataMisas() {
      return this.http.get(this.url_misas_api).map(res => res.json());
  }
  getDataMociones() {
      return this.http.get(this.url_mociones_api).map(res => res.json());
  }
  setDataIngreso(param){
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
        //if(response['_body'] != '0'){
          this.resultado = 'se guardo';
          return this.resultado;
        //}
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
