import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCardModule, MatFormFieldModule, MatListModule, MatToolbarModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CompanyEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFireModule.initializeApp( environment.firebase ),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
