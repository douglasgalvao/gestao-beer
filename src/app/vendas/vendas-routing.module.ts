
import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendasComponent } from './vendas.component';
import { HomeComponent } from '../home/home.component';
import { AuthGuard } from '../guards/auth.guard';




const routes: Routes = [
  { path: "", redirectTo: "/vendas/vendas", pathMatch: 'full' },
  { path: "vendas", component: VendasComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendasRoutingModule { }
