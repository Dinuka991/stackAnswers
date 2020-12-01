import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteTest1Component } from './route-test1.component';

describe('RouteTest1Component', () => {
  let component: RouteTest1Component;
  let fixture: ComponentFixture<RouteTest1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteTest1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteTest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
