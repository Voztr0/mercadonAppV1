import { Component, OnInit, ViewChild } from '@angular/core';
import { Screws } from 'src/app/shared/interfaces/screws';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ScrewService } from 'src/app/shared/services/screws.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  screwList: Screws[] = [];

  displayedColumns: string[] = [
    'nombre',
    'precio',
    'formato',
    'marca',
    'acciones',
  ];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _screwService: ScrewService) {}
  ngOnInit(): void {
    this.getScrewsData();
  }
  getScrewsData() {
    this.screwList = this._screwService.getScrews();
    this.dataSource = new MatTableDataSource(this.screwList);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
