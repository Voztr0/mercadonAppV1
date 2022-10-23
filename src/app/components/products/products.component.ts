import { Component, OnInit, ViewChild } from '@angular/core';
import { Screws } from 'src/app/shared/interfaces/screws';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ScrewService } from 'src/app/shared/services/screws.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { ConfigureTableComponent } from './configure-table/configure-table.component';

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

  constructor(private _screwService: ScrewService, public dialog: MatDialog) {}
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

  deleteScrew(index: number) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '460px',
      data: 'are you sure?',
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this._screwService.deleteScrewById(index);
        this.getScrewsData();
      }
    });
  }

  dialogSettings() {
    const dialogRef = this.dialog.open(ConfigureTableComponent, {
      width: '680px',
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.displayedColumns = res.concat('acciones');
      }
    });
  }
}
