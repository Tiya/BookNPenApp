import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularEpubViewerModule } from 'angular-epub-viewer';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AngularEpubViewerComponent } from './angular-epub-viewer/angular-epub-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AngularEpubViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularEpubViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
