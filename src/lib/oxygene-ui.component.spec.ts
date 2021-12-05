import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OxygeneUiComponent } from './oxygene-ui.component';

describe('OxygeneUiComponent', () => {
  let component: OxygeneUiComponent;
  let fixture: ComponentFixture<OxygeneUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OxygeneUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OxygeneUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
