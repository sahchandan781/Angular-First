import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ifelsecondition } from './ifelsecondition';

describe('Ifelsecondition', () => {
  let component: Ifelsecondition;
  let fixture: ComponentFixture<Ifelsecondition>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ifelsecondition]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ifelsecondition);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
