import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentRoleComponent } from './main-content-role.component';

describe('MainContentRoleComponent', () => {
  let component: MainContentRoleComponent;
  let fixture: ComponentFixture<MainContentRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContentRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
