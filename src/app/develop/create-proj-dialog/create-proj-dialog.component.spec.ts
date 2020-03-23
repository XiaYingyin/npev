import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjDialogComponent } from './create-proj-dialog.component';

describe('CreateProjDialogComponent', () => {
  let component: CreateProjDialogComponent;
  let fixture: ComponentFixture<CreateProjDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProjDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProjDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
