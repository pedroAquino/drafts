import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibicaoComponent } from './exibicao.component';

describe('ExibicaoComponent', () => {
  let component: ExibicaoComponent;
  let fixture: ComponentFixture<ExibicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExibicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExibicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
