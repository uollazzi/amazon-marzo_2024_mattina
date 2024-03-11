import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdottiOffertaComponent } from './prodotti-offerta.component';

describe('ProdottiOffertaComponent', () => {
  let component: ProdottiOffertaComponent;
  let fixture: ComponentFixture<ProdottiOffertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdottiOffertaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdottiOffertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
