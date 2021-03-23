import { Asset } from './asset.interface';

export interface Product {
  porcentagemCarteira: number;
  produto: string;
  qtdAtivos: number;
  valorBruto: number;
  valorLiquido: number;
  listaAtivos: Array<Asset>;
}
