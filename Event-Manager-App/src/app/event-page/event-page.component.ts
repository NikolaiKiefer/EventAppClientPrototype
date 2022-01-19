import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent implements OnInit {

  //lat = 48.2103270750066;
  //lng = 9.023426;
  center: google.maps.LatLngLiteral = {lat: 48.2103270750066, lng: 9.03250532077214 };

  marker = {
    position: {
      lat: 48.21032707500661, 
      lng: 9.03250532077214
    },
    label: {
      color: 'red',
      text: 'Hochschule HS Albsig',
    },
    title: 'Marker title ',
  }

  constructor() { }

  ngOnInit(): void {

    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
  }

}
