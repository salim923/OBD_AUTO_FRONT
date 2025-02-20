import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleRedirectComponent } from './google-redirect.component';

describe('GoogleRedirectComponent', () => {
  let component: GoogleRedirectComponent;
  let fixture: ComponentFixture<GoogleRedirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleRedirectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
