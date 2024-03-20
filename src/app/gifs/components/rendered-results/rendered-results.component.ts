import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-rendered-results',
  templateUrl: './rendered-results.component.html',
  styleUrls: ['./rendered-results.component.css']
})
export class RenderedResultsComponent {
  
  constructor(private gifsService: GifsService) { }
  
  get gifs(){
    return this.gifsService.response;
  }

}
