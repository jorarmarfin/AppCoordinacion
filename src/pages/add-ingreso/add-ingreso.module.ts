import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddIngresoPage } from './add-ingreso';

@NgModule({
  declarations: [
    AddIngresoPage,
  ],
  imports: [
    IonicPageModule.forChild(AddIngresoPage),
  ],
})
export class AddIngresoPageModule {}
