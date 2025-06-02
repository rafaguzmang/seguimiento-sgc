import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduccionmutiladomaterialComponent } from './produccionmutiladomaterial.component';

describe('ProduccionmutiladomaterialComponent', () => {
  let component: ProduccionmutiladomaterialComponent;
  let fixture: ComponentFixture<ProduccionmutiladomaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduccionmutiladomaterialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduccionmutiladomaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
