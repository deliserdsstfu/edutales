import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaleQuizComponent } from './tale-quiz.component';

describe('TaleQuizComponent', () => {
  let component: TaleQuizComponent;
  let fixture: ComponentFixture<TaleQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaleQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaleQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
