import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent {

  @ViewChild('inputSearch') inputSearch!:ElementRef<HTMLInputElement>;
  constructor(private gifsService: GifsService){  }

  search(){
    const searchString=this.inputSearch.nativeElement.value;
    if(searchString.trim().length === 0){
      return;
    }
    this.inputSearch.nativeElement.value='';
    this.gifsService.searchGifs(searchString);
  }

}
