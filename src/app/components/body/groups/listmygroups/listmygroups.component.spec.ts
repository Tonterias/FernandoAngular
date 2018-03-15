import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmygroupsComponent } from './listmygroups.component';

describe('ListmygroupsComponent', () => {
  let component: ListmygroupsComponent;
  let fixture: ComponentFixture<ListmygroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListmygroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmygroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
