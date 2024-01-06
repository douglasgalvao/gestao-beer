import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstoqueComponent } from './estoque.component';

const context = "/auth/content/estoque/"

const routes: Routes = [
  { path: "", component: EstoqueComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstoqueRoutingModule { }
