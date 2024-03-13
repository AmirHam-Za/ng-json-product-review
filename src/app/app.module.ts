import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CustomersComponent } from './components/customers/customers.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RequestsInterceptor } from '@interceptors/request/requests.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [    
    { provide: HTTP_INTERCEPTORS, useClass:RequestsInterceptor , multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
