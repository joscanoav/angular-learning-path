import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor( private gisService: GifsService ){}

  get tags(): string[]{
    return this.gisService.tagsHistory;
  }

  searchTag( tag: string ){
    this.gisService.searchTag( tag );

  }

}
