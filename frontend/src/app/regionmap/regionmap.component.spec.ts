import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionmapComponent } from './regionmap.component';

describe('RegionmapComponent', () => {
  let component: RegionmapComponent;
  let fixture: ComponentFixture<RegionmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
