import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './pages/gifs-page/gifs-page.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { RenderedResultsComponent } from './components/rendered-results/rendered-results.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    SearcherComponent,
    RenderedResultsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GifsPageComponent
  ]
})
export class GifsModule { }
