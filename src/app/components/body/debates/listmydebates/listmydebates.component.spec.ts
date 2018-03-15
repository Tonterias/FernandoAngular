import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmydebatesComponent } from './listmydebates.component';

describe('ListmydebatesComponent', () => {
  let component: ListmydebatesComponent;
  let fixture: ComponentFixture<ListmydebatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListmydebatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmydebatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
