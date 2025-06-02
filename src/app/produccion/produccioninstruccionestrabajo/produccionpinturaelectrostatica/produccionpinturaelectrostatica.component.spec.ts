import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduccionpinturaelectrostaticaComponent } from './produccionpinturaelectrostatica.component';

describe('ProduccionpinturaelectrostaticaComponent', () => {
  let component: ProduccionpinturaelectrostaticaComponent;
  let fixture: ComponentFixture<ProduccionpinturaelectrostaticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduccionpinturaelectrostaticaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduccionpinturaelectrostaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
