import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../material-module';
import { HomeRoutingModule } from './home-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContentComponent } from './content/content.component';
import { HomeBalanceComponent } from './home-balance/home-balance.component';
import { TableSortPaginationComponent } from './table-pagination/table-pagination.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    HomeComponent,
    ToolbarComponent,
    ContentComponent,
    HomeBalanceComponent,
    TableSortPaginationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule,
    MatButtonModule,
    SharedModule
  ]
})
export class HomeModule { }
