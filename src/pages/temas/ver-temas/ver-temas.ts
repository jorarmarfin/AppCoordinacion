import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppServiceProvider } from '../../../providers/app-service/app-service';

@IonicPage()
@Component({
  selector: 'page-ver-temas',
  templateUrl: 'ver-temas.html',
})
export class VerTemasPage {
	Temas: any[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public AppService: AppServiceProvider) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad VerTemasPage');
  }
  ionViewDidEnter(){
    this.AppService.getDataTemas().subscribe((data)=>{
      this.Temas = data;
    });
  }

}
