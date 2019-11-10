import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicfestivalsComponent } from './musicfestivals/musicfestivals.component';
// Forms module
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    MusicfestivalsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
