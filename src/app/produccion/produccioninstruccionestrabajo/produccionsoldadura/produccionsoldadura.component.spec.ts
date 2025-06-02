import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduccionsoldaduraComponent } from './produccionsoldadura.component';

describe('ProduccionsoldaduraComponent', () => {
  let component: ProduccionsoldaduraComponent;
  let fixture: ComponentFixture<ProduccionsoldaduraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduccionsoldaduraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduccionsoldaduraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
