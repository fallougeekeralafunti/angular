import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentUserComponent } from './main-content-user.component';

describe('MainContentUserComponent', () => {
  let component: MainContentUserComponent;
  let fixture: ComponentFixture<MainContentUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContentUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
