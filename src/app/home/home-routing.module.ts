
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { NovaVendaDialogComponent } from './nova-venda-dialog/nova-venda-dialog.component';




const routes: Routes = [
  { path: "", redirectTo: "/home/home", pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "novaVenda", component: NovaVendaDialogComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
