import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListproposalsComponent } from './listproposals.component';

describe('ListproposalsComponent', () => {
  let component: ListproposalsComponent;
  let fixture: ComponentFixture<ListproposalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListproposalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListproposalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
