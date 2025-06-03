import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompartidosformatosmodificaciondocumentosComponent } from './compartidosformatosmodificaciondocumentos.component';

describe('CompartidosformatosmodificaciondocumentosComponent', () => {
  let component: CompartidosformatosmodificaciondocumentosComponent;
  let fixture: ComponentFixture<CompartidosformatosmodificaciondocumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompartidosformatosmodificaciondocumentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompartidosformatosmodificaciondocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
