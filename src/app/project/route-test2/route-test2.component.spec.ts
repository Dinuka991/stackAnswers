import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteTest2Component } from './route-test2.component';

describe('RouteTest2Component', () => {
  let component: RouteTest2Component;
  let fixture: ComponentFixture<RouteTest2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteTest2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
