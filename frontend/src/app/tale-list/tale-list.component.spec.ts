import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaleListComponent } from './tale-list.component';

describe('TaleListComponent', () => {
  let component: TaleListComponent;
  let fixture: ComponentFixture<TaleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
