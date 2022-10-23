import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ReactiveFormsModule } from '@angular/forms';

//Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MenuComponent } from './components/menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [SpinnerComponent, MenuComponent, DialogComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatTooltipModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    DragDropModule,
  ],
  exports: [
    SpinnerComponent,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MenuComponent,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatTooltipModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    DragDropModule,
  ],
})
export class SharedModule {}
