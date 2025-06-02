import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducciondabladomaterialComponent } from './producciondabladomaterial.component';

describe('ProducciondabladomaterialComponent', () => {
  let component: ProducciondabladomaterialComponent;
  let fixture: ComponentFixture<ProducciondabladomaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProducciondabladomaterialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducciondabladomaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
