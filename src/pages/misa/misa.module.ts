import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MisaPage } from './misa';

@NgModule({
  declarations: [
    MisaPage,
  ],
  imports: [
    IonicPageModule.forChild(MisaPage),
  ],
})
export class MisaPageModule {}
