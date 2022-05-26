import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INoticias } from '../interfaces/noticias';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  autores: string[]=[];

  constructor(private http: HttpClient) { }

  getNoticias(parametros: any): Observable<any> {
    const URL ='https://newsapi.org/v2/top-headlines?country='+ parametros.pais +'&category='+ parametros.categoria +'&apiKey=6b297d06a16249918613ad3c4496ee0f'     //Buscar por pais y categoria

    return this.http.get(URL);

  }


  getAutores(parametros2: any): Observable<any>{
    const URL ='https://newsapi.org/v2/top-headlines?sources='+ parametros2.autor +'&apiKey=6b297d06a16249918613ad3c4496ee0f'       //Buscar por autor



    return this.http.get(URL);
  }

  getAutores3(): Observable<any>{
    const URL ='https://newsapi.org/v2/top-headlines?sources&apiKey=6b297d06a16249918613ad3c4496ee0f'       //Buscar por autor
    return this.http.get(URL)
  }
  async getAutores2(): Promise<INoticias>{ //
    const URL ='https://newsapi.org/v2/top-headlines/sources?apiKey=6b297d06a16249918613ad3c4496ee0f'
    return new Promise ( resolve => {
      this.http.get<INoticias>(URL)
        .subscribe (data => {
          console.log(data);
          resolve(data)
        })
    })

  }


}
