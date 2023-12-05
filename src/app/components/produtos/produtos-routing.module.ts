
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './produtos.component';




const routes: Routes = [
  { path: "", redirectTo: "/produtos", pathMatch: 'full' },
  { path: "produtos", component: ProdutosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
