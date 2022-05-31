import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../services/event.service';
import { Subscription } from 'rxjs';
import { Event } from '../model/event.model';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent implements OnInit {

  subscription: Subscription = new Subscription;
  event!: Event;

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

  constructor(private route: ActivatedRoute,
    private eventService: EventService) { }

  ngOnInit(): void {

    this.subscription = this.route.params.subscribe(params => {
      const id = params['id'] || '';
      this.eventService.getEvent(id).subscribe(event => {
        console.log(event);
      })
    })

    

    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
