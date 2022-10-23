import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-configure-table',
  templateUrl: './configure-table.component.html',
  styleUrls: ['./configure-table.component.scss'],
})
export class ConfigureTableComponent implements OnInit {
  displayedColumns: Array<any> = ['nombre', 'precio', 'formato', 'marca'];

  constructor(public dialogRef: MatDialogRef<ConfigureTableComponent>) {}

  ngOnInit(): void {}

  onClickNO() {
    this.dialogRef.close();
  }

  drop(event: CdkDragDrop<{ title: string; poster: string }[]>) {
    moveItemInArray(
      this.displayedColumns,
      event.previousIndex,
      event.currentIndex
    );
  }
}
