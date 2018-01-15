import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecordatoriosPage } from './recordatorios';

@NgModule({
  declarations: [
    RecordatoriosPage,
  ],
  imports: [
    IonicPageModule.forChild(RecordatoriosPage),
  ],
})
export class RecordatoriosPageModule {}
