import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GIfsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private serviceUrl : string ='https://api.giphy.com/v1/gifs';
  private apiKey:string ='milYQypR65uY88CLhcX1XiwMsCLGBmsj';
  private _record: string[]=[];
  public response: Gif[]=[];

  get record(){
    return [...this._record];
  }

  constructor(private http:HttpClient){
    this.response=JSON.parse( localStorage.getItem('results')! )|| [];
    this._record=JSON.parse( localStorage.getItem('record')! )|| [];
  }


  searchGifs(searchString: string){
    
    searchString=searchString.trim().toLocaleLowerCase();
    
    if( !this._record.includes(searchString)){
      this._record.unshift( searchString );
      this._record = this._record.splice(0,10);
      localStorage.setItem('record',JSON.stringify(this._record));
    }

    const params =new HttpParams()
    .set('api_key',this.apiKey)
    .set('limit','12')
    .set('q',searchString);

    this.http.get<GIfsResponse>(`${ this.serviceUrl }/search`,{ params } )
    .subscribe( ({data:responseData}: GIfsResponse) => {
      this.response=responseData;
      localStorage.setItem('results',JSON.stringify(this.response));
    } )
   
  }

}
