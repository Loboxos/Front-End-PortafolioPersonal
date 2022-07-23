import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpyEducComponent } from './expy-educ.component';

describe('ExpyEducComponent', () => {
  let component: ExpyEducComponent;
  let fixture: ComponentFixture<ExpyEducComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpyEducComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpyEducComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
