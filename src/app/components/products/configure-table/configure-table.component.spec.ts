import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ConfigureTableComponent } from './configure-table.component';

describe('ConfigureTableComponent', () => {
  let component: ConfigureTableComponent;
  let fixture: ComponentFixture<ConfigureTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      providers: [{ provide: MatDialogRef, useValue: {} }],
      declarations: [ConfigureTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
