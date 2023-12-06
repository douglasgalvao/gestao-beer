import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { HomeModule } from './home/home.module';
import { MenuBarComponent } from './control/menu-bar/menu-bar.component';
import { MenuLateralComponent } from './control/menu-lateral/menu-lateral.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuLateralComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
