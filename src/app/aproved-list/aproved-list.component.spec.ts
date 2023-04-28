import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovedListComponent } from './aproved-list.component';

describe('AprovedListComponent', () => {
  let component: AprovedListComponent;
  let fixture: ComponentFixture<AprovedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprovedListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprovedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
