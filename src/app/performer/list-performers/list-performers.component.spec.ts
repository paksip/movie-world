import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPerformersComponent } from './list-performers.component';

describe('ListPerformersComponent', () => {
  let component: ListPerformersComponent;
  let fixture: ComponentFixture<ListPerformersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPerformersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPerformersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
