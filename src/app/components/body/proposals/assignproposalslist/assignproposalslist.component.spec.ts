import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignproposalslistComponent } from './assignproposalslist.component';

describe('AssignproposalslistComponent', () => {
  let component: AssignproposalslistComponent;
  let fixture: ComponentFixture<AssignproposalslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignproposalslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignproposalslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
