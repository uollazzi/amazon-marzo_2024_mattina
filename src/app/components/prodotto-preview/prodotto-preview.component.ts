import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Prodotto } from '../../models/prodotto';

@Component({
  selector: 'app-prodotto-preview',
  templateUrl: './prodotto-preview.component.html',
  styleUrl: './prodotto-preview.component.css'
})
export class ProdottoPreviewComponent {
  @Input()
  prodotto?: Prodotto;

  @Input()
  mostraBottoneNonMiInteressa: boolean = false;

  @Output()
  onNonMiInteressa = new EventEmitter<Prodotto>(); // generics

  nonMiInteressa() {
    console.log("Non mi interessa il prodotto", this.prodotto!.title);
    this.onNonMiInteressa.emit(this.prodotto);
  }
}
