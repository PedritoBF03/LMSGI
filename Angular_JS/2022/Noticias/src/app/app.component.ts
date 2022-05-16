import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Noticias';
  listNoticias: any[] = [];
  loading = false;                //Esta variable hace referencia al Spinkit que es lo de la espera de carga

  constructor(private _noticiaService: NoticiaService){

  }

  buscarNoticias(parametros: any) {
    this.loading = true;                                                //Iniciamos el loading nada mas inicie el proceso de busqueda
    this._noticiaService.getNoticias(parametros).subscribe(data => {
      this.loading = false;                                             //Lo detengo en el momento en el que ya cargue la información
      console.log(data);
      this.listNoticias = data.articles;
    }, error => {
      console.log(error);
      this.loading = false;                                             //Aqui ponemos el loading por si ubiese algun fallo que deje
    })                                                                  //de aparecer y de esta forma no se haga un bucle infinito

  }

}
