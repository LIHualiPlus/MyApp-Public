import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeshowComponent } from './lifeshow.component';

describe('LifeshowComponent', () => {
  let component: LifeshowComponent;
  let fixture: ComponentFixture<LifeshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
