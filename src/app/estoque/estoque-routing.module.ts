import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstoqueComponent } from './estoque.component';

const context = "/auth/content/estoque/"

const routes: Routes = [
  { path: "", redirectTo: { context } + "/estoque", pathMatch: 'full' },
  { path: "estoque", component: EstoqueComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstoqueRoutingModule { }
