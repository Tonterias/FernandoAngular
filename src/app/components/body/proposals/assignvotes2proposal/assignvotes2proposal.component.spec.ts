import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignvotes2proposalComponent } from './assignvotes2proposal.component';

describe('Assignvotes2proposalComponent', () => {
  let component: Assignvotes2proposalComponent;
  let fixture: ComponentFixture<Assignvotes2proposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assignvotes2proposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assignvotes2proposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
