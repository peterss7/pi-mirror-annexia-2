import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TilesModule } from './tiles/tiles.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TilesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
