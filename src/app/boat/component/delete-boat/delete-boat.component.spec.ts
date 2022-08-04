import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBoatComponent } from './delete-boat.component';

describe('DeleteBoatComponent', () => {
  let component: DeleteBoatComponent;
  let fixture: ComponentFixture<DeleteBoatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteBoatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBoatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
