import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComandaComponent } from './comanda.component';
import { MaterialModule } from '../material-module';
import { ComandaRoutingModule } from './comanda-routing.module';



@NgModule({
  declarations: [
    ComandaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ComandaRoutingModule
  ]
})
export class ComandaModule { }
