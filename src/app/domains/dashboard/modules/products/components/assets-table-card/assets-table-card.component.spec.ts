import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsTableCardComponent } from './assets-table-card.component';

describe('AssetsTableCardComponent', () => {
  let component: AssetsTableCardComponent;
  let fixture: ComponentFixture<AssetsTableCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetsTableCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsTableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
