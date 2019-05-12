import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableAngMaterialComponent } from './mat-table-ang-material.component';

describe('MatTableAngMaterialComponent', () => {
  let component: MatTableAngMaterialComponent;
  let fixture: ComponentFixture<MatTableAngMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatTableAngMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTableAngMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
