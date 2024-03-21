import { Component } from '@angular/core';
import { ArticoloAddDTO } from '../../models/articolo';
import { BlogService } from '../../services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articolo-add',
  templateUrl: './articolo-add.component.html',
  styleUrl: './articolo-add.component.css'
})
export class ArticoloAddComponent {
  model: ArticoloAddDTO = new ArticoloAddDTO();

  constructor(private blogService: BlogService, private router: Router) {

  }

  aggiungiArticolo() {
    this.blogService.addArticolo(this.model)
      .subscribe(dati => {
        this.model = new ArticoloAddDTO();

        // naviga alla lista degli articoli
        this.router.navigate(["/blog"]);
      });
  }
}
