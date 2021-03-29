import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PolicylistComponent } from './policylist/policylist.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './profile/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    PolicylistComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    FormsModule,
    ReactiveFormsModule,


    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
