import { Component, OnDestroy, OnInit } from '@angular/core';
import { Prodotto } from '../../models/prodotto';
import { ProdottiService } from '../../services/prodotti.service';
// import { PRODOTTI } from '../../data/prodotti';

@Component({
  selector: 'app-prodotti-vetrina',
  templateUrl: './prodotti-vetrina.component.html',
  styleUrl: './prodotti-vetrina.component.css'
})
export class ProdottiVetrinaComponent implements OnInit, OnDestroy {
  // prodotti: Prodotto[] = PRODOTTI;
  prodotti: Prodotto[] = [];

  constructor(private ps: ProdottiService) {

  }

  ngOnInit(): void {
    this.ps.getProdotti()
      .subscribe(dati => {
        this.prodotti = dati;
      });
  }

  ngOnDestroy(): void {

  }

  rimuoviProdotto(prodotto: Prodotto) {
    let i = this.prodotti.indexOf(prodotto);

    if (i > -1) {
      this.prodotti.splice(i, 1);
    }
  }
}
