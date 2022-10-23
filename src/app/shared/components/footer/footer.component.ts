import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AddProductComponent } from 'src/app/components/products/add-product/add-product.component';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Output() newlist = new EventEmitter();
  @Input() buttonAdd: any;

  constructor(
    private storageService: StorageService,
    private router: Router,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  isLogged() {
    return this.storageService.getItem('admin') ? true : false;
  }

  addProduct() {
    const dialogRef = this.dialog.open(AddProductComponent, {
      width: '680px',
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.newlist.emit(true);
        this._snackBar.open('Producto añadido con exito', '', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }
    });
  }
}
