import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VendasComponent } from './vendas/vendas.component';
import { BalancoComponent } from './balanco/balanco.component';



const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "vendas", component: VendasComponent },
  { path: "balanco", component: BalancoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
