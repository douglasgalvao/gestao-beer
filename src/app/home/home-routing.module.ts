
import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { NovaVendaDialogComponent } from '../vendas/nova-venda-dialog/nova-venda-dialog.component';
import { AuthGuard } from '../guards/auth.guard';

const context = "/auth/content/home/"


const routes: Routes = [
  { path: "", redirectTo: '/content/home', pathMatch: 'full' },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "novaVenda", component: NovaVendaDialogComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
