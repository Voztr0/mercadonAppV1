import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(private router: Router, private storageService: StorageService) {}

  ngOnInit(): void {}
  goToLogin() {
    this.router.navigate(['/login']);
  }
  goToHome() {
    this.router.navigate(['/home']);
  }
  logOut() {
    this.storageService.removeAll();
    this.goToLogin();
  }
  isLogged() {
    return this.storageService.getItem('admin') ? true : false;
  }
}
