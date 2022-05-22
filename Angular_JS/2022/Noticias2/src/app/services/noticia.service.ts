import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }

  getNoticias(parametros: any): Observable<any> {
    const URL ='https://newsapi.org/v2/top-headlines?country='+ parametros.pais +'&category='+ parametros.categoria +'&apiKey=6b297d06a16249918613ad3c4496ee0f'     //Buscar por pais y categoria

    return this.http.get(URL);

  }


  getAutores(parametros2: any): Observable<any>{
    const URL ='https://newsapi.org/v2/top-headlines?sources='+ parametros2.autor +'&apiKey=6b297d06a16249918613ad3c4496ee0f'       //Buscar por autor

    return this.http.get(URL);
  }


}
