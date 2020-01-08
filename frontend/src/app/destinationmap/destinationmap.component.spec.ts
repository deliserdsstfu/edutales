import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationmapComponent } from './destinationmap.component';

describe('DestinationmapComponent', () => {
  let component: DestinationmapComponent;
  let fixture: ComponentFixture<DestinationmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
