import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComandaComponent } from './comanda.component';
import { MaterialModule } from '../material-module';
import { ComandaRoutingModule } from './comanda-routing.module';
import { CardComandaComponent } from './card-comanda/card-comanda.component';
import { CardCriarComandaComponent } from './card-criar-comanda/card-criar-comanda.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ComandaComponent,
    CardComandaComponent,
    CardCriarComandaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ComandaRoutingModule,
    SharedModule
  ]
})
export class ComandaModule { }
