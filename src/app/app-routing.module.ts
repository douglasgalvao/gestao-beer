
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: 'full' },
  { path: "home", loadChildren: () => import('./home/home.module').then(module => module.HomeModule) },
  { path: "vendas", loadChildren: () => import('./vendas/vendas.module').then(module => module.VendasModule) },
  { path: "produtos", loadChildren: () => import('./components/produtos/produtos.module').then(module => module.ProdutosModule) },
  { path: "compras", loadChildren: () => import('./compras/compras.module').then(module => module.ComprasModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
