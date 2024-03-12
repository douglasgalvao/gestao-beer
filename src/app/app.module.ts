import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './shared/shared.module';
import { ContentRoutingModule } from './content/content-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ContentRoutingModule,
    SharedModule,
    MaterialModule,
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
