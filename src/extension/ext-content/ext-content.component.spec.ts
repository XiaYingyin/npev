/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExtContentComponent } from './ext-content.component';

describe('ExtContentComponent', () => {
  let component: ExtContentComponent;
  let fixture: ComponentFixture<ExtContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
