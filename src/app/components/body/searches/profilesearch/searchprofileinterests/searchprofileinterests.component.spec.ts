import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchprofileinterestsComponent } from './searchprofileinterests.component';

describe('SearchprofileinterestsComponent', () => {
  let component: SearchprofileinterestsComponent;
  let fixture: ComponentFixture<SearchprofileinterestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchprofileinterestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchprofileinterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
