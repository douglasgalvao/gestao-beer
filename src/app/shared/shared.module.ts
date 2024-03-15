import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../material-module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DialogActionComponent } from './dialog-action/dialog-action.component';


@NgModule({
  declarations: [
    ToolbarComponent,
    DialogActionComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    ToolbarComponent,
    DialogActionComponent
  ]
})
export class SharedModule { }
