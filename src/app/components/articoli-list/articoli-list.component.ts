import { Component, OnInit, inject } from '@angular/core';
import { Articolo } from '../../models/articolo';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-articoli-list',
  templateUrl: './articoli-list.component.html',
  styleUrl: './articoli-list.component.css'
})
export class ArticoliListComponent implements OnInit {

  articoli: Articolo[] = [];

  // injection alternativa 1
  // constructor(private blogService: BlogService) { }

  // injection alternativa 2
  private blogService = inject(BlogService);

  ngOnInit(): void {
    this.blogService.getArticoli()
      .subscribe(articoli => {
        this.articoli = articoli;
        console.log(this.articoli);
      });
  }
}
