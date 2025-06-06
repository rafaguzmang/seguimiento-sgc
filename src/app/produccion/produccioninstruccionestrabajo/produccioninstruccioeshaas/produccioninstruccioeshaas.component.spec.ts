import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduccioninstruccioeshaasComponent } from './produccioninstruccioeshaas.component';

describe('ProduccioninstruccioeshaasComponent', () => {
  let component: ProduccioninstruccioeshaasComponent;
  let fixture: ComponentFixture<ProduccioninstruccioeshaasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduccioninstruccioeshaasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduccioninstruccioeshaasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
