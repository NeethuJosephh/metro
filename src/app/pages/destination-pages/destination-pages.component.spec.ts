import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationPagesComponent } from './destination-pages.component';

describe('DestinationPagesComponent', () => {
  let component: DestinationPagesComponent;
  let fixture: ComponentFixture<DestinationPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinationPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
