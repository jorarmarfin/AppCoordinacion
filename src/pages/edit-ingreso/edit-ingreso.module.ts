import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditIngresoPage } from './edit-ingreso';

@NgModule({
  declarations: [
    EditIngresoPage,
  ],
  imports: [
    IonicPageModule.forChild(EditIngresoPage),
  ],
})
export class EditIngresoPageModule {}
