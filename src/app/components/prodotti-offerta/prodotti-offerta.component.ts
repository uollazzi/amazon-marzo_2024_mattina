import { Component } from '@angular/core';
import { Prodotto } from '../../models/prodotto';
import { PRODOTTI_IN_OFFERTA } from '../../data/prodotti';

@Component({
  selector: 'app-prodotti-offerta',
  templateUrl: './prodotti-offerta.component.html',
  styleUrl: './prodotti-offerta.component.css'
})
export class ProdottiOffertaComponent {
  prodotti: Prodotto[] = PRODOTTI_IN_OFFERTA;
}
