import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LP01Q3Component } from './lp01-q3.component';

describe('LP01Q3Component', () => {
  let component: LP01Q3Component;
  let fixture: ComponentFixture<LP01Q3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LP01Q3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LP01Q3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
