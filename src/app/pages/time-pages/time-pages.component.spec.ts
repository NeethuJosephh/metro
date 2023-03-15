import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimePagesComponent } from './time-pages.component';

describe('TimePagesComponent', () => {
  let component: TimePagesComponent;
  let fixture: ComponentFixture<TimePagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimePagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
