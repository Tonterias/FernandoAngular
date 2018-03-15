import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdebateComponent } from './searchdebate.component';

describe('SearchdebateComponent', () => {
  let component: SearchdebateComponent;
  let fixture: ComponentFixture<SearchdebateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchdebateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchdebateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
