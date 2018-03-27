import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdebatesComponent } from './listdebates.component';

describe('ListdebatesComponent', () => {
  let component: ListdebatesComponent;
  let fixture: ComponentFixture<ListdebatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListdebatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdebatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
