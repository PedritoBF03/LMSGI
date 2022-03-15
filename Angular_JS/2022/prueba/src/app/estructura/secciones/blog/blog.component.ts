import { Component, OnInit } from '@angular/core';
import { IPeliculas, IGenero, IGeneros, IPelicula } from 'src/app/interfaces/Peliculas';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  pagina: number = 0;

  public generos: IGeneros = {};
  public peli: IPelicula = {};
  public peliculas: IPeliculas = {
    page: 1,
  };


  constructor(private peliculasService: PeliculasService) { }

  async ngOnInit() {
    this.peliculas = await this.peliculasService.getAll(this.pagina);
    console.log(this.peliculas);
    this.generos = await this.peliculasService.getGeneros();
    console.log(this.generos);


  }
  async getMovie(id: string){
    console.log(id);
    this.peli = await this.peliculasService.getMovie(id);
    console.log(this.peli)
  }
  async getFilter(generoId: string) {
    console.log(generoId);
    this.peliculas = await this.peliculasService.getFilter(generoId);
    console.log (this.peliculas);
  }
  async  getPagina(npagina: number){
    this.peliculas = await this.peliculasService.getPagina(npagina);
    console.log(this.peliculas);
  }



}
