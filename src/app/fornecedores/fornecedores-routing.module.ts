import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FornecedoresComponent } from './fornecedores.component';



const routes: Routes = [
  { path: "", redirectTo: "/fornecedores/fornecedores", pathMatch: 'full' },
  { path: "fornecedores", component: FornecedoresComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FornecedoresRoutingModule { }
