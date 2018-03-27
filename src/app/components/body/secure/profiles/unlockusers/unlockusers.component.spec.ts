import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockusersComponent } from './unlockusers.component';

describe('UnlockusersComponent', () => {
  let component: UnlockusersComponent;
  let fixture: ComponentFixture<UnlockusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnlockusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnlockusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
