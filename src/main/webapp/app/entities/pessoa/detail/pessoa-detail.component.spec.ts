import { TestBed } from '@angular/core/testing';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { RouterTestingHarness, RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { PessoaDetailComponent } from './pessoa-detail.component';

describe('Pessoa Management Detail Component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PessoaDetailComponent, RouterTestingModule.withRoutes([], { bindToComponentInputs: true })],
      providers: [
        provideRouter(
          [
            {
              path: '**',
              component: PessoaDetailComponent,
              resolve: { pessoa: () => of({ id: 123 }) },
            },
          ],
          withComponentInputBinding(),
        ),
      ],
    })
      .overrideTemplate(PessoaDetailComponent, '')
      .compileComponents();
  });

  describe('OnInit', () => {
    it('Should load pessoa on init', async () => {
      const harness = await RouterTestingHarness.create();
      const instance = await harness.navigateByUrl('/', PessoaDetailComponent);

      // THEN
      expect(instance.pessoa).toEqual(expect.objectContaining({ id: 123 }));
    });
  });
});
