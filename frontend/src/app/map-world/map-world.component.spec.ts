import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapWorldComponent } from './map-world.component';

describe('MapWorldComponent', () => {
  let component: MapWorldComponent;
  let fixture: ComponentFixture<MapWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapWorldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
