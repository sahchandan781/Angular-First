import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signalsinangular } from './signalsinangular';

describe('Signalsinangular', () => {
  let component: Signalsinangular;
  let fixture: ComponentFixture<Signalsinangular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signalsinangular]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Signalsinangular);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
