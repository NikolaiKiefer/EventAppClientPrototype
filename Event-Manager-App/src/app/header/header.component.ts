import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private tokenStorage: TokenStorageService, private route: Router) { }

  ngOnInit(): void {
  }

  navigate() {
    if(this.tokenStorage.getToken()) {
      this.route.navigate(['/profile']);
    } else {
      this.route.navigate(['/login']);
    }
    
  }

}
