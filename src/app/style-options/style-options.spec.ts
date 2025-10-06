import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleOptions } from './style-options';

describe('StyleOptions', () => {
  let component: StyleOptions;
  let fixture: ComponentFixture<StyleOptions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyleOptions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleOptions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
