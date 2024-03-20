import { Component } from '@angular/core';
import { ArticoloAddDTO } from '../../models/articolo';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-articolo-add',
  templateUrl: './articolo-add.component.html',
  styleUrl: './articolo-add.component.css'
})
export class ArticoloAddComponent {
  model: ArticoloAddDTO = new ArticoloAddDTO();

  constructor(private blogService: BlogService) {

  }
}
