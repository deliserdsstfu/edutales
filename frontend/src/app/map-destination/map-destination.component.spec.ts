import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapDestinationComponent } from './map-destination.component';

describe('MapDestinationComponent', () => {
  let component: MapDestinationComponent;
  let fixture: ComponentFixture<MapDestinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapDestinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
