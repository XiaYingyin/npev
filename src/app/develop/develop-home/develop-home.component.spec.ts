import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopHomeComponent } from './develop-home.component';

describe('DevelopHomeComponent', () => {
  let component: DevelopHomeComponent;
  let fixture: ComponentFixture<DevelopHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
