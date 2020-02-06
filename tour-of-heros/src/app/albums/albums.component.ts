import { Component, OnInit,Input } from '@angular/core';
import {Album} from '../interfaces/album';
import { MOCK_ALBUMS } from '../interfaces/dummy-data/mock-album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  albums: Album[] = MOCK_ALBUMS;
  selectAlbum: Album 
  onSelect(album:Album) : void
  {this.selectAlbum=album;}

}
