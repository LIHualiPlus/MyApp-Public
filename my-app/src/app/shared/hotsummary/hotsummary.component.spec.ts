import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotsummaryComponent } from './hotsummary.component';

describe('HotsummaryComponent', () => {
  let component: HotsummaryComponent;
  let fixture: ComponentFixture<HotsummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotsummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
