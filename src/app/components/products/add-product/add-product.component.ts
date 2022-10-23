import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Screws } from 'src/app/shared/interfaces/screws';
import { ScrewService } from 'src/app/shared/services/screws.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  public form: FormGroup;
  public formato: any[] = ['formato 1', 'formato 2', 'formato 3'];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private screwService: ScrewService,
    public dialogRef: MatDialogRef<AddProductComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      formato: ['', Validators.required],
      marca: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  addProduct() {
    const screw: Screws = {
      nombre: this.form.value.nombre,
      precio: this.form.value.precio,
      formato: this.form.value.formato,
      marca: this.form.value.marca,
    };

    this.screwService.addScrew(screw);
  }
}
