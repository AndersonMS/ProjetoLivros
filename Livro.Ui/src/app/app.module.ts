import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'


import { AppComponent } from './app.component';
import { ApiService } from './util/services/api.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule 
  ],
  providers: [
    ApiService,
    HttpModule 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
