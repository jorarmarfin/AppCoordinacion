import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MocionesPage } from './mociones';

@NgModule({
  declarations: [
    MocionesPage,
  ],
  imports: [
    IonicPageModule.forChild(MocionesPage),
  ],
})
export class MocionesPageModule {}
