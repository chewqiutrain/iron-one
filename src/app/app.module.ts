import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonStatusComponent } from './button-status/button-status.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //MatToolbarModule,
   // MatIconModule,
    MatButtonModule,
    //MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
