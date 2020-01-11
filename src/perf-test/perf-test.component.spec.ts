/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PerfTestComponent } from './perf-test.component';

describe('PerfTestComponent', () => {
  let component: PerfTestComponent;
  let fixture: ComponentFixture<PerfTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
