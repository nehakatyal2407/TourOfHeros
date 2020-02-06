import { Component, OnInit,Input } from '@angular/core';
import { Album } from '../interfaces/album';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() selectAlbum:Album;


}
