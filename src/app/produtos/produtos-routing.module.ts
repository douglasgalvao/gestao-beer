
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './produtos.component';
import { NovaVendaDialogComponent } from '../vendas/nova-venda-dialog/nova-venda-dialog.component';



const routes: Routes = [
  { path: "", redirectTo: "/produtos", pathMatch: 'full' },
  { path: "produtos", component: ProdutosComponent },
  { path: "novaVenda", component: NovaVendaDialogComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
