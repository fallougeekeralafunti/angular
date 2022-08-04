import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LockUnlockUserComponent } from './lock-unlock-user.component';



describe('LockUnlockUserComponent', () => {
  let component: LockUnlockUserComponent;
  let fixture: ComponentFixture<LockUnlockUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockUnlockUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockUnlockUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
