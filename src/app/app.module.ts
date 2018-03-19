// MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BodyModule } from './components/body/body.module';
// import { DataTablesModule } from 'angular-datatables';

// SERVICES
// import { SettingsService } from './services/settings/settings.service';
// import { SettingsService } from './services/service.index';
import { ServiceModule } from './services/service.module';

// ROUTES
import { APP_ROUTES } from './app.routes';

// COMPONENTS
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    BodyModule,
    ServiceModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
