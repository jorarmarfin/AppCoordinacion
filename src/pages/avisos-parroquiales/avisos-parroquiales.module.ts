import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AvisosParroquialesPage } from './avisos-parroquiales';

@NgModule({
  declarations: [
    AvisosParroquialesPage,
  ],
  imports: [
    IonicPageModule.forChild(AvisosParroquialesPage),
  ],
})
export class AvisosParroquialesPageModule {}
