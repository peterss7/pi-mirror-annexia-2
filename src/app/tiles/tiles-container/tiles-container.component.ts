import { Component, OnInit } from '@angular/core';
import { TEMP_TILES } from '../shared/temp-tiles';
import { Tile } from '../shared/tile.model';


@Component({
  selector: 'app-tiles-container',
  templateUrl: './tiles-container.component.html',
  styleUrls: ['./tiles-container.component.css']
})
export class TilesContainerComponent implements OnInit{
  
  tiles: Tile[] = TEMP_TILES;
  
  constructor() {}
  ngOnInit() {}
}
