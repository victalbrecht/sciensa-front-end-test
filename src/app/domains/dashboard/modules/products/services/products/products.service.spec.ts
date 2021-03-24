import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { MockData } from 'src/app/domains/dashboard/interfaces/mock-data.interface';
import { environment } from 'src/environments/environment';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let productsService: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    productsService = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(productsService).toBeTruthy();
  });

  it('should fetch data from mock server', () => {
    const mockData: MockData = {
      idConta: 3465436,
      produtos: [
        {
          porcentagemCarteira: 80,
          produto: 'testing',
          qtdAtivos: 4,
          valorBruto: 235346765,
          valorLiquido: 235346765,
          listaAtivos: [],
        },
      ],
    };

    const httpTestingController: HttpTestingController = TestBed.inject(
      HttpTestingController
    );

    productsService.getMockData().subscribe((mockData: MockData) => {
      expect(mockData.idConta).toBe(3465436);
      expect(mockData.produtos[0].produto).toBe('testing');
    });

    const mockDataRequest: TestRequest = httpTestingController.expectOne(
      environment.jsonServerMockApi
    );
    expect(mockDataRequest.request.method).toBe('GET');
    mockDataRequest.flush(mockData);
    httpTestingController.verify();
  });
});
