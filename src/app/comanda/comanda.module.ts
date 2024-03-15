import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComandaComponent } from './comanda.component';
import { MaterialModule } from '../material-module';
import { ComandaRoutingModule } from './comanda-routing.module';
import { CardComandaComponent } from './card-comanda/card-comanda.component';
import { CardCriarComandaComponent } from './card-comanda/card-criar-comanda/card-criar-comanda.component';
import { SharedModule } from '../shared/shared.module';
import { DialogActionComandaComponent } from './card-comanda/dialog-buttons/actions-buttons-comanda.component';
import { DialogCreateComandaComponent } from './dialog-create-comanda/dialog-create-comanda.component';
import { DialogAddItemComandaComponent } from './dialog-add-item-comanda/dialog-add-item-comanda.component';



@NgModule({
  declarations: [
    ComandaComponent,
    CardComandaComponent,
    DialogActionComandaComponent,
    CardCriarComandaComponent,
    DialogCreateComandaComponent,
    DialogAddItemComandaComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ComandaRoutingModule,
    SharedModule
  ]
})
export class ComandaModule { }
