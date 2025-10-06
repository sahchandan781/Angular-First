import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Effectinangular } from './effectinangular';

describe('Effectinangular', () => {
  let component: Effectinangular;
  let fixture: ComponentFixture<Effectinangular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Effectinangular]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Effectinangular);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
