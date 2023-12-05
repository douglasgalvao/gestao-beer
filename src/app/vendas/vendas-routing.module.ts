
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendasComponent } from './vendas.component';
import { HomeComponent } from '../home/home.component';




const routes: Routes = [
  { path: "", redirectTo: "/vendas/vendas", pathMatch: 'full' },
  { path: "vendas", component: VendasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendasRoutingModule { }
