import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmypostsComponent } from './listmyposts.component';

describe('ListmypostsComponent', () => {
  let component: ListmypostsComponent;
  let fixture: ComponentFixture<ListmypostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListmypostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmypostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
