
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  { path: "", redirectTo: "/home/home", pathMatch: 'full' },
  { path: "home", loadChildren: () => import('./home/home.module').then(module => module.HomeModule) },
  { path: "vendas", loadChildren: () => import('./vendas/vendas.module').then(module => module.VendasModule) },
  { path: "produtos", loadChildren: () => import('./produtos/produtos.module').then(module => module.ProdutosModule) },
  { path: "fornecedores", loadChildren: () => import('./fornecedores/fornecedores.module').then(module => module.FornecedoresModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
