import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { MaterialModule } from '../material-module';



@NgModule({
  declarations: [
    ContentComponent,
    MenuBarComponent,
    MenuLateralComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    MaterialModule
  ]
})
export class ContentModule { }
