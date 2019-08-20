import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeExperiencesComponent } from './life-experiences.component';

describe('LifeExperiencesComponent', () => {
  let component: LifeExperiencesComponent;
  let fixture: ComponentFixture<LifeExperiencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeExperiencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
