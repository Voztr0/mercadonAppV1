import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScrewService } from 'src/app/shared/services/screws.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public screwList: Array<any>;

  constructor(
    private router: Router,
    private storageService: StorageService,
    private screw: ScrewService
  ) {
    this.screwList = this.screw.getScrews();
  }

  ngOnInit(): void {}

  goToLogin() {
    if (!this.isLogged()) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/products']);
    }
  }

  isLogged() {
    return this.storageService.getItem('admin') ? true : false;
  }
}
