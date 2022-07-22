import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraPrincComponent } from './barra-princ.component';

describe('BarraPrincComponent', () => {
  let component: BarraPrincComponent;
  let fixture: ComponentFixture<BarraPrincComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraPrincComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraPrincComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
