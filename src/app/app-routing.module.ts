import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VendasComponent } from './vendas/vendas.component';
import { ProdutosComponent } from './produtos/produtos.component';



const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "vendas", component: VendasComponent },
  { path: "produtos", component: ProdutosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
