import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(private storageService: StorageService) {}

  ngOnInit(): void {}

  isLogged() {
    return this.storageService.getItem('admin') ? true : false;
  }
}
