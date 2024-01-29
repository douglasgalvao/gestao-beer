
import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content.component';
import { AuthGuard } from '../guards/auth.guard';




const routes: Routes = [
  { path: "", redirectTo: "content/home", pathMatch: 'full' },
  {
    path: "content", component: ContentComponent, canActivate: [AuthGuard], children: [
      { path: "home", loadChildren: () => import('../home/home.module').then(module => module.HomeModule) },
      { path: "vendas", loadChildren: () => import('../vendas/vendas.module').then(module => module.VendasModule) },
      { path: "produtos", loadChildren: () => import('../produtos/produtos.module').then(module => module.ProdutosModule) },
      { path: "estoque", loadChildren: () => import('../estoque/estoque.module').then(module => module.EstoqueModule) },
      { path: "comanda", loadChildren: () => import('../comanda/comanda.module').then(module => module.ComandaModule) },
      // { path: "despesas", loadChildren: () => import('../despesas/despesas.module').then(module => module.DespesasModule) },
      // { path: "fornecedores", loadChildren: () => import('../fornecedores/fornecedores.module').then(module => module.FornecedoresModule) },
      { path: "**", redirectTo: "/auth/content/home" }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
