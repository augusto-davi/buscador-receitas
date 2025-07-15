import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaBusca } from './receita-busca';

describe('ReceitaBusca', () => {
  let component: ReceitaBusca;
  let fixture: ComponentFixture<ReceitaBusca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceitaBusca]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceitaBusca);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
