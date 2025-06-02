import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduccionmanualesComponent } from './produccionmanuales.component';

describe('ProduccionmanualesComponent', () => {
  let component: ProduccionmanualesComponent;
  let fixture: ComponentFixture<ProduccionmanualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduccionmanualesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduccionmanualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
