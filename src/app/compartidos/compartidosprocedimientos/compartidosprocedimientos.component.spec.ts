import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompartidosprocedimientosComponent } from './compartidosprocedimientos.component';

describe('CompartidosprocedimientosComponent', () => {
  let component: CompartidosprocedimientosComponent;
  let fixture: ComponentFixture<CompartidosprocedimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompartidosprocedimientosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompartidosprocedimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
