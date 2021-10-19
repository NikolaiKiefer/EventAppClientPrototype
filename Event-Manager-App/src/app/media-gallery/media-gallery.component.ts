import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-gallery',
  templateUrl: './media-gallery.component.html',
  styleUrls: ['./media-gallery.component.scss']
})
export class MediaGalleryComponent implements OnInit {

  imageList: {id:number, name:string, reference: string}[] = [
    {id: 1, name:'Fall of rome', reference: 'assets/paintings/6vPQQvFo4XAYfkVdxMoabB.jpg'},
    {id: 2, name:'Napoleon crossing the alps', reference:'assets/paintings/David_-_Napoleon_crossing_the_Alps_-_Malmaison2.jpg'},
    {id: 5, name:'Great wave off kanagawa', reference:'assets/paintings/great wave of kaganawa.jpg'},
    {id: 5, name:'Mona Lisa', reference:'assets/paintings/mona-lisa-p-1024727412-jpg--81961-.jpg'},
    {id: 5, name:'Starry night', reference:'assets/paintings/VanGogh-starry_night.jpg'},
];

  constructor() { }

  ngOnInit(): void {
  }

}
