import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduccionlavadomaterialComponent } from './produccionlavadomaterial.component';

describe('ProduccionlavadomaterialComponent', () => {
  let component: ProduccionlavadomaterialComponent;
  let fixture: ComponentFixture<ProduccionlavadomaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduccionlavadomaterialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduccionlavadomaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
