import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viagem } from './viagem';

describe('Viagem', () => {
  let component: Viagem;
  let fixture: ComponentFixture<Viagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Viagem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viagem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
