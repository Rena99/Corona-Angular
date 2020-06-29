import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PatientsPathModule} from 'src/app/patients-path/patients-path.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PatientsPathModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
