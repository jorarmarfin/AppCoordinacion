import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReunionesPage } from './reuniones';

@NgModule({
  declarations: [
    ReunionesPage,
  ],
  imports: [
    IonicPageModule.forChild(ReunionesPage),
  ],
})
export class ReunionesPageModule {}
