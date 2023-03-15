import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninPagesComponent } from './signin-pages.component';

describe('SigninPagesComponent', () => {
  let component: SigninPagesComponent;
  let fixture: ComponentFixture<SigninPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
