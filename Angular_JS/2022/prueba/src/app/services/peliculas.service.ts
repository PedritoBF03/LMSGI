import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGenero, IGeneros, IPelicula, IPeliculas } from '../interfaces/Peliculas';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private api = 'https://api.themoviedb.org/3';

  private params = 
    new HttpParams()
      .set('api_key', '87bbd880b55367f41777557bd966cf24')
      .set('page', 1)
      .set('language', 'es-ES');

  private  httpOptions = {
    headers: new HttpHeaders({
      'Accept' : 'application/json',
    }),
    params: this.params
  };

  constructor(private http: HttpClient) { }





  async getPagina(pagina: number):Promise<IPeliculas>{
    const prefix = 'discover/movie';
    const url = `${this.api}/${prefix}`;
    let params1 = new HttpParams()
                  .set("page", pagina)
                  .set('api_key', '87bbd880b55367f41777557bd966cf24');
    this.httpOptions.params = params1;
    return new Promise (resolve => {
      this.http.get<IPeliculas>(url, this.httpOptions)
        .subscribe( data => {
          console.log(data);
          resolve(data);
        })
    })
  }



  async getFilter(genero: string):Promise<IPeliculas>{
    const prefix = 'discover/movie';
    const url = `${this.api}/${prefix}`;
    let params1 = new HttpParams()
                  .set("with_genres", genero)
                  .set('api_key', '87bbd880b55367f41777557bd966cf24');
    this.httpOptions.params = params1;
    return new Promise (resolve => {
      this.http.get<IPeliculas>(url, this.httpOptions)
        .subscribe( data => {
          console.log(data);
          resolve(data);
        })
    })
  }





  async getMovie(id: string): Promise<IPelicula>{
    const prefix = 'movie';
    const url = `${this.api}/${prefix}/${id}`;
    console.log(url);
    return new Promise ( resolve => {
      this.http.get<IPelicula>(url, this.httpOptions)
        .subscribe (data => {
          console.log(data);
          resolve(data)
        })
    })

  }
  async getGeneros(): Promise<IGeneros> {
    const prefix = '/genre/movie/list';
    const url = `${this.api}/${prefix}`;
    return new Promise ( resolve => {
      this.http.get<IGeneros>(url, this.httpOptions)
        .subscribe (data => {
          console.log(data);
          resolve (data)
        })
    })
  }
  async getAll(page: number):Promise<IPeliculas>{
    const prefix = "discover/movie";
    const url = `${this.api}/${prefix}`;  
    return new Promise ( resolve => {
      this.http.get<IPeliculas>(url, this.httpOptions)
      .subscribe (data => {
        resolve( data )
      })
    })
  }









}
