import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { DataTablesModule } from 'angular-datatables';

// ROUTES
import { APP_ROUTING } from './app.routes';

// SERVICES

// COMPONENTS
import { AppComponent } from './app.component';
// import { HomeComponent } from './components/body/home/home.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
//    DataTablesModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
