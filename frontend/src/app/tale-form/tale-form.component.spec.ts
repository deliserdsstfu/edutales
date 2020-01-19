import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaleFormComponent } from './tale-form.component';

describe('TaleFormComponent', () => {
  let component: TaleFormComponent;
  let fixture: ComponentFixture<TaleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
