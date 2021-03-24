import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { MockData } from '../../../../interfaces/mock-data.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public constructor(private http: HttpClient) {}

  public getMockData(): Observable<MockData> {
    return this.http
      .get<MockData>(`${environment.jsonServerMockApi}`)
      .pipe(
        map((mockData: MockData) => ({
          idConta: mockData.idConta,
          produtos: Object.values(mockData.produtos),
        }))
      );
  }
}
