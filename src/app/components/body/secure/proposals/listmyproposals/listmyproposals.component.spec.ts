import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmyproposalsComponent } from './listmyproposals.component';

describe('ListmyproposalsComponent', () => {
  let component: ListmyproposalsComponent;
  let fixture: ComponentFixture<ListmyproposalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListmyproposalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmyproposalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
