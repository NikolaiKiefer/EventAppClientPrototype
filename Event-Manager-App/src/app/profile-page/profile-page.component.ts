import { Component, OnInit, HostListener } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';
import { SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

installierAufforderung: any = null;

@HostListener('window:beforeinstallprompt', ['$event'])
onBeforeInstallPrompt(event: Event) {
  this.installierAufforderung = event;
  return false;
}

readonly VAPID_PUBLIC_KEY = "BDN-uSIsGgAxXGzntmEvSuPFou7oiMvrvWBoah3U8aeTNYxod332mcWRHIBvOliRv88lXDPxQDQQKPf5JlINqy8";

account_name = ''
  constructor(private tokenStorage: TokenStorageService, private route: Router, private swPush: SwPush) { }

  ngOnInit(): void {
    if(!this.tokenStorage.getToken()) {
      this.route.navigate(['/login']);
    }
    this.account_name = this.tokenStorage.getUser().username;
    

    this.swPush.subscription.subscribe(change => {
      console.log(change);
    })
  }

  subscribeToPush() {
     this.swPush.requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY,
      }).then(
        sub => console.log(sub)
      )
     .catch(err=> console.error("Could not subscribe:", err));
  }

  install() {
    this.installierAufforderung.prompt();
  }
}
