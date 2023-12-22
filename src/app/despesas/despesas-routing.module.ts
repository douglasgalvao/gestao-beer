import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DespesasComponent } from './despesas.component';


const routes: Routes = [
  { path: "", redirectTo: "/despesas/despesas", pathMatch: 'full' },
  { path: "despesas", component: DespesasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DespesasRoutingModule { }
