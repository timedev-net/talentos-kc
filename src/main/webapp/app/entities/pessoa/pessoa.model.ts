import dayjs from 'dayjs/esm';
import { Genero } from 'app/entities/enumerations/genero.model';

export interface IPessoa {
  id: number;
  nome?: string | null;
  email?: string | null;
  cpf?: string | null;
  nascimento?: dayjs.Dayjs | null;
  genero?: keyof typeof Genero | null;
  miniBio?: string | null;
  fotoPerfilUrl?: string | null;
  criadoEm?: dayjs.Dayjs | null;
}

export type NewPessoa = Omit<IPessoa, 'id'> & { id: null };
