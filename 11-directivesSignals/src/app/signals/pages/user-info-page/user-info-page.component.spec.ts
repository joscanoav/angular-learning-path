import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoPageComponent } from './user-info-page.component';

describe('UserInfoPageComponent', () => {
  let component: UserInfoPageComponent;
  let fixture: ComponentFixture<UserInfoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserInfoPageComponent]
    });
    fixture = TestBed.createComponent(UserInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
