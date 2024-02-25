import dayjs from 'dayjs/esm';

import { IPessoa, NewPessoa } from './pessoa.model';

export const sampleWithRequiredData: IPessoa = {
  id: 30966,
  nome: 'vaporize horrible',
  email: 'Caua_Nogueira@live.com',
  cpf: 'neatly',
};

export const sampleWithPartialData: IPessoa = {
  id: 14937,
  nome: 'speedily',
  email: 'Lorena34@hotmail.com',
  cpf: 'overextend since',
  genero: 'FEM',
  miniBio: 'anti office',
  fotoPerfilUrl: '../fake-data/blob/hipster.png',
  fotoPerfilUrlContentType: 'unknown',
  criadoEm: dayjs('2024-02-25T02:58'),
};

export const sampleWithFullData: IPessoa = {
  id: 26373,
  nome: 'tornado',
  email: 'Emanuelly15@hotmail.com',
  cpf: 'ah',
  nascimento: dayjs('2024-02-25T20:16'),
  genero: 'MASC',
  miniBio: 'bustle alongside',
  fotoPerfilUrl: '../fake-data/blob/hipster.png',
  fotoPerfilUrlContentType: 'unknown',
  criadoEm: dayjs('2024-02-25T09:01'),
};

export const sampleWithNewData: NewPessoa = {
  nome: 'ugh contest actually',
  email: 'Bruna_Costa@bol.com.br',
  cpf: 'curiously',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
