import { Component, OnInit } from '@angular/core';
import { Prodotto } from '../../models/prodotto';
import { ProdottiService } from '../../services/prodotti.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prodotti-categoria',
  templateUrl: './prodotti-categoria.component.html',
  styleUrl: './prodotti-categoria.component.css'
})
export class ProdottiCategoriaComponent implements OnInit {
  prodotti: Prodotto[] = [];
  categoria: string = "";

  constructor(private ps: ProdottiService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    const cat = this.route.snapshot.paramMap.get("cat");
    this.categoria = cat!;

    this.ps.getProdottiByCategoria(cat!)
      .subscribe(dati => this.prodotti = dati);

  }
}
