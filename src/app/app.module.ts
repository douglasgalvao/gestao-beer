import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { VendasComponent } from './vendas/vendas.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { FinanceiroComponent } from './financeiro/financeiro.component';
import { ComprasComponent } from './compras/compras.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { TableSortPaginationComponent } from './table-sort-pagination/table-sort-pagination.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    SettingsComponent,
    VendasComponent,
    ProdutosComponent,
    FinanceiroComponent,
    ComprasComponent,
    MenuLateralComponent,
    TableSortPaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
