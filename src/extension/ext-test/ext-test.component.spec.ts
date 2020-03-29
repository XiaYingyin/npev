import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtTestComponent } from './ext-test.component';

describe('ExtTestComponent', () => {
  let component: ExtTestComponent;
  let fixture: ComponentFixture<ExtTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
