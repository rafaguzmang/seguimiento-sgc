import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduccionflejadomaterialComponent } from './produccionflejadomaterial.component';

describe('ProduccionflejadomaterialComponent', () => {
  let component: ProduccionflejadomaterialComponent;
  let fixture: ComponentFixture<ProduccionflejadomaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduccionflejadomaterialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduccionflejadomaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
