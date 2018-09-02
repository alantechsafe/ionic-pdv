import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClienteFormPage } from './cliente-form';

@NgModule({
  declarations: [
    ClienteFormPage,
  ],
  imports: [
    IonicPageModule.forChild(ClienteFormPage),
  ],
  exports: [
    ClienteFormPage
  ]
})
export class ClienteFormPageModule {}
