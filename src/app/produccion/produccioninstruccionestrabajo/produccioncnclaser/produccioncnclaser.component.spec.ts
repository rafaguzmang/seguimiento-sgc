import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduccioncnclaserComponent } from './produccioncnclaser.component';

describe('ProduccioncnclaserComponent', () => {
  let component: ProduccioncnclaserComponent;
  let fixture: ComponentFixture<ProduccioncnclaserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduccioncnclaserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduccioncnclaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
