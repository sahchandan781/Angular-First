import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopContextual } from './loop-contextual';

describe('LoopContextual', () => {
  let component: LoopContextual;
  let fixture: ComponentFixture<LoopContextual>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoopContextual]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoopContextual);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
