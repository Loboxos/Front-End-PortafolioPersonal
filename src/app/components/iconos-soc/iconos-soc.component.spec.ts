import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconosSocComponent } from './iconos-soc.component';

describe('IconosSocComponent', () => {
  let component: IconosSocComponent;
  let fixture: ComponentFixture<IconosSocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconosSocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconosSocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
