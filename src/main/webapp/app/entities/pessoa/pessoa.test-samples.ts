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
  fotoPerfilUrl: 'hence because reinvest',
  criadoEm: dayjs('2024-02-24T21:58'),
};

export const sampleWithFullData: IPessoa = {
  id: 9344,
  nome: 'depression',
  email: 'Natalia.Souza5@yahoo.com',
  cpf: 'accidentally scow',
  nascimento: dayjs('2024-02-25T07:58'),
  genero: 'FEM',
  miniBio: 'actually',
  fotoPerfilUrl: 'alongside',
  criadoEm: dayjs('2024-02-25T01:26'),
};

export const sampleWithNewData: NewPessoa = {
  nome: 'furthermore flowery ha',
  email: 'Marcelo_Pereira@bol.com.br',
  cpf: 'provided daily',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
