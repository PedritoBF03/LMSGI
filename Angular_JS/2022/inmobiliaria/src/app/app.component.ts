//Importar nuevas clases    ---> aquellas clases que en su definicion tengan un export
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*
  data Binding: Comunicacion en tiempo real de: 
      -variables de controlador que se visualiza en la vista.
      -variables de ña vista (inputs/formularios) disponibles en tiempo real en el controlador.

      Angular es un framework (generador de tareas para facilitar la construccion de proyectos)
      -FW basado en la 
          + filosofia de los componentes (modular) --> react / bue en
          + toma como lenguaje de programacion base TypeScript (JS orientado a objetos --> fuertex TIPADO)
          + JS --> ES6

          
  */
  // variables /propiedades de clase / objeto
  title1: string = `La Manola`
  title = 'inmobiliaria';
  edad: number = 18;
  edad1 = 18;


  constructor(){
    this.listar();
    // setInterval(() => {
    //   this.edad = this.edad + 1;
    // },1000 );
    setInterval(this.contador),1000;
  }
  //funciones / métodos de clase (nuevo, listar,...)
  public nuevo(){


  }

  public contador(){
    console.log ("contador");
    this.edad = 123;
    this.edad++;
    console.log (this.edad++)
  }

  private listar (){


  }

  protected eliminar (){


  }
}
