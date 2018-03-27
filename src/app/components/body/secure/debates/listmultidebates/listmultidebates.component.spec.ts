import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmultidebatesComponent } from './listmultidebates.component';

describe('ListmultidebatesComponent', () => {
  let component: ListmultidebatesComponent;
  let fixture: ComponentFixture<ListmultidebatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListmultidebatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmultidebatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
