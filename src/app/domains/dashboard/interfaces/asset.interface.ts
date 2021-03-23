import { Client } from './client.interface';

export interface Asset {
  porcentagem: number;
  ativo: string;
  quantidade: number;
  dataPosicao: Date;
  taxa: string;
  indexador: string;
  emissos: string;
  dataVencimento: Date;
  valorBruto: number;
  listaClientes: Array<Client>;
}
