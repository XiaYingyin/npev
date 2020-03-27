import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildPanelComponent } from './build-panel.component';

describe('BuildPanelComponent', () => {
  let component: BuildPanelComponent;
  let fixture: ComponentFixture<BuildPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
