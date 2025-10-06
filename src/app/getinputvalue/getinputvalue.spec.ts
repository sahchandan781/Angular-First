import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getinputvalue } from './getinputvalue';

describe('Getinputvalue', () => {
  let component: Getinputvalue;
  let fixture: ComponentFixture<Getinputvalue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Getinputvalue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Getinputvalue);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
