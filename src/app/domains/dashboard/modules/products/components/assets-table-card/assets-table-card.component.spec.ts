import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SharedModule } from 'src/app/shared/shared.module';
import { AssetsTableCardComponent } from './assets-table-card.component';

describe('AssetsTableCardComponent', () => {
  let component: AssetsTableCardComponent;
  let fixture: ComponentFixture<AssetsTableCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [AssetsTableCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsTableCardComponent);
    component = fixture.componentInstance;
    component.productData = {
      product: {
        porcentagemCarteira: 80,
        produto: 'testing',
        qtdAtivos: 4,
        valorBruto: 235346765,
        valorLiquido: 235346765,
        listaAtivos: [
          {
            porcentagem: 20,
            ativo:
              'Brasil Plural Crédito Corporativo II FIC FIM Crédito Privado',
            quantidade: 10,
            dataPosicao: <Date>('2021-04-31T00:00:00' as unknown),
            taxa: '99',
            indexador: 'CDI',
            emissor: 'Brasil Plural',
            dataVencimento: <Date>('2021-04-31T00:00:00' as unknown),
            valorBruto: 1000000,
            listaClientes: [
              {
                porcentagem: 20,
                nomeCliente: 'Fernanda Maciel Algazal',
                quantidade: 100,
                valorBruto: 1000000,
              },
              {
                porcentagem: 20,
                nomeCliente: 'Fernanda Maciel Algazal',
                quantidade: 100,
                valorBruto: 1000000,
              },
            ],
          },
        ],
      },
      index: 1,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render assets table', () => {
    const assetsTableRecordsRef: Array<DebugElement> = fixture.debugElement.queryAll(By.css('.assets-table tbody tr'));
    expect(assetsTableRecordsRef.length).toBe(2);
  });

  it('should toggle clients table', () => {
    const expandClientsTableBtnRef: DebugElement = fixture.debugElement.query(By.css('.row-action-btn'));
    let clientsTableRecordsRef: Array<DebugElement> = fixture.debugElement.queryAll(By.css('.clients-table tbody tr'));
    expect(clientsTableRecordsRef.length).toBe(0);
    expandClientsTableBtnRef.nativeElement.click();
    fixture.detectChanges();
    clientsTableRecordsRef = fixture.debugElement.queryAll(By.css('.clients-table tbody tr'));
    expect(clientsTableRecordsRef.length).toBe(3);
  });

  it('should show empty table message', () => {
    component.productData = { product: null, index: null};
    fixture.detectChanges();
    const assetsTableRecordsRef: Array<DebugElement> = fixture.debugElement.queryAll(By.css('.assets-table tbody tr'));
    expect(assetsTableRecordsRef.length).toBe(1);
    expect(assetsTableRecordsRef[0].nativeElement.childNodes[0].innerText).toBe('Tabela vazia');
  });
});
