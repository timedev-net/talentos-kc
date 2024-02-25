import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import dayjs from 'dayjs/esm';
import { DATE_TIME_FORMAT } from 'app/config/input.constants';
import { IPessoa, NewPessoa } from '../pessoa.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts IPessoa for edit and NewPessoaFormGroupInput for create.
 */
type PessoaFormGroupInput = IPessoa | PartialWithRequiredKeyOf<NewPessoa>;

/**
 * Type that converts some properties for forms.
 */
type FormValueOf<T extends IPessoa | NewPessoa> = Omit<T, 'nascimento' | 'criadoEm'> & {
  nascimento?: string | null;
  criadoEm?: string | null;
};

type PessoaFormRawValue = FormValueOf<IPessoa>;

type NewPessoaFormRawValue = FormValueOf<NewPessoa>;

type PessoaFormDefaults = Pick<NewPessoa, 'id' | 'nascimento' | 'criadoEm'>;

type PessoaFormGroupContent = {
  id: FormControl<PessoaFormRawValue['id'] | NewPessoa['id']>;
  nome: FormControl<PessoaFormRawValue['nome']>;
  email: FormControl<PessoaFormRawValue['email']>;
  cpf: FormControl<PessoaFormRawValue['cpf']>;
  nascimento: FormControl<PessoaFormRawValue['nascimento']>;
  genero: FormControl<PessoaFormRawValue['genero']>;
  miniBio: FormControl<PessoaFormRawValue['miniBio']>;
  fotoPerfilUrl: FormControl<PessoaFormRawValue['fotoPerfilUrl']>;
  criadoEm: FormControl<PessoaFormRawValue['criadoEm']>;
};

export type PessoaFormGroup = FormGroup<PessoaFormGroupContent>;

@Injectable({ providedIn: 'root' })
export class PessoaFormService {
  createPessoaFormGroup(pessoa: PessoaFormGroupInput = { id: null }): PessoaFormGroup {
    const pessoaRawValue = this.convertPessoaToPessoaRawValue({
      ...this.getFormDefaults(),
      ...pessoa,
    });
    return new FormGroup<PessoaFormGroupContent>({
      id: new FormControl(
        { value: pessoaRawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        },
      ),
      nome: new FormControl(pessoaRawValue.nome, {
        validators: [Validators.required],
      }),
      email: new FormControl(pessoaRawValue.email, {
        validators: [Validators.required],
      }),
      cpf: new FormControl(pessoaRawValue.cpf, {
        validators: [Validators.required],
      }),
      nascimento: new FormControl(pessoaRawValue.nascimento),
      genero: new FormControl(pessoaRawValue.genero),
      miniBio: new FormControl(pessoaRawValue.miniBio),
      fotoPerfilUrl: new FormControl(pessoaRawValue.fotoPerfilUrl),
      criadoEm: new FormControl(pessoaRawValue.criadoEm),
    });
  }

  getPessoa(form: PessoaFormGroup): IPessoa | NewPessoa {
    return this.convertPessoaRawValueToPessoa(form.getRawValue() as PessoaFormRawValue | NewPessoaFormRawValue);
  }

  resetForm(form: PessoaFormGroup, pessoa: PessoaFormGroupInput): void {
    const pessoaRawValue = this.convertPessoaToPessoaRawValue({ ...this.getFormDefaults(), ...pessoa });
    form.reset(
      {
        ...pessoaRawValue,
        id: { value: pessoaRawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */,
    );
  }

  private getFormDefaults(): PessoaFormDefaults {
    const currentTime = dayjs();

    return {
      id: null,
      nascimento: currentTime,
      criadoEm: currentTime,
    };
  }

  private convertPessoaRawValueToPessoa(rawPessoa: PessoaFormRawValue | NewPessoaFormRawValue): IPessoa | NewPessoa {
    return {
      ...rawPessoa,
      nascimento: dayjs(rawPessoa.nascimento, DATE_TIME_FORMAT),
      criadoEm: dayjs(rawPessoa.criadoEm, DATE_TIME_FORMAT),
    };
  }

  private convertPessoaToPessoaRawValue(
    pessoa: IPessoa | (Partial<NewPessoa> & PessoaFormDefaults),
  ): PessoaFormRawValue | PartialWithRequiredKeyOf<NewPessoaFormRawValue> {
    return {
      ...pessoa,
      nascimento: pessoa.nascimento ? pessoa.nascimento.format(DATE_TIME_FORMAT) : undefined,
      criadoEm: pessoa.criadoEm ? pessoa.criadoEm.format(DATE_TIME_FORMAT) : undefined,
    };
  }
}
