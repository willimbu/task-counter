import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MdButtonModule,MdButtonToggleModule,MdIconModule} from '@angular/material';
import 'hammerjs';
import {MdToolbarModule} from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuth } from "angularfire2/auth";
import { LoginManagerService } from "app/services/login-manager/login-manager.service";
import { AppHeaderComponent } from './app-header/app-header.component';
import {MdMenuModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdIconModule,
    MdMenuModule,
    MdToolbarModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AngularFireAuth,LoginManagerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
