import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from 'src/app/shared/shared.module';
import { ProductCardComponent } from './product-card.component';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductCardComponent],
      imports: [SharedModule, BrowserAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    component.productData = {
      product: {
        porcentagemCarteira: 80,
        produto: 'testing',
        qtdAtivos: 4,
        valorBruto: 235346765,
        valorLiquido: 235346765,
        listaAtivos: [],
      },
      index: 1,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expand card', () => {
    const expandBtnRef: DebugElement = fixture.debugElement.query(By.css('.row-action-btn'));
    let expandContentRef: DebugElement = fixture.debugElement.query(By.css('.expanded-content'));
    expect(expandContentRef).toBeNull();
    expandBtnRef.nativeElement.click();
    fixture.detectChanges();
    expandContentRef = fixture.debugElement.query(By.css('.expanded-content'));
    expect(expandContentRef.nativeElement.children.length).toBe(2);
  });
});
