import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TilesRoutingModule } from './tiles-routing.module';
import { TilesContainerComponent } from './tiles-container/tiles-container.component';


@NgModule({
  declarations: [
    TilesContainerComponent
  ],
  imports: [
    CommonModule,
    TilesRoutingModule
  ],
  exports: [TilesContainerComponent]
})
export class TilesModule { }
