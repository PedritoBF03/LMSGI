import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { INoticias } from 'src/app/interfaces/noticias';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() parametrosSeleccionados = new EventEmitter<any>()               //Es una expecie de export para poder utilizarlo en otro ts
  @Output() parametros2Seleccionados = new EventEmitter<any>()

  //Les daria aqui un valor de inicio a los valores en caso de que se hiciese poniendo los valores de forma manual.
  categoriaSeleccionada = 'general';                                        //Aquí almacenare en esta variable el valor con el cual yo querre buscar y reflejar en mi html
  paisSeleccionado = 'ar';                                                  //Se usan varibles debido a que dependiendo lo que nosotros seleccionemos en nuestro formulario
  autorSeleccionado = 'associated-press';                                   //El valor cambiara pero por defecto les vamos a asignar un valor para que no de problemas


//De esta forma en vez de hacer que se cogiesen de la API los datos estaria haciendo que los datos los estableciera yo,
//escribiendolos a mano uno a uno.

//   categorias: any[] = [                                                      //Aquí asigno los valores a los respondera mi formulario en el apartado categoria
//     { value: 'general', nombre: 'General'},
//     { value: 'business', nombre: 'Negocios'},
//     { value: 'entertainment', nombre: 'Entretenimiento'},
//     { value: 'health', nombre: 'Salud'},
//     { value: 'science', nombre: 'Ciencia'},
//     { value: 'sports', nombre: 'Deportes'},
//     { value: 'technology', nombre: 'Tecnología'},
// ]

//paises: any[] = [                                                      //Aquí asigno los valores a los respondera mi formulario en el apartado pais
//   { value: 'se', nombre: 'Pais'},
//   { value: 'us', nombre: 'Estados Unidos'},
//   { value: 've', nombre: 'Venezuela'},
//   { value: 'ar', nombre: 'Argentina'},
//   { value: 'br', nombre: 'Brasil'},
//   { value: 'fr', nombre: 'Francia'},
//   { value: 'hu', nombre: 'Hungria'},
//   { value: 'mx', nombre: 'Mexico'},
//   { value: 'gb', nombre: 'Reino Unido'},
// ]

// autores: any[] = [                                                      //Aquí asigno los valores a los respondera mi formulario en el apartado autores
//   { value: 'associated-press', nombre: 'Associated-press' },
//   { value: 'cnn', nombre: 'cnn' },
//   { value: 'politico', nombre: 'Politico' },
//   { value: 'al-jazeera-english', nombre: 'Cal-jazeera-english' },
//   { value: 'usa-today', nombre: 'Usa-today' },
//   { value: 'la-nacion', nombre: 'La Nacion' },
//   { value: 'google-news', nombre: 'Google News' },
//   { value: 'infobae', nombre: 'Infobae' },
// ]

//Arrays donde almacenare todos los datos que a mi me interesan mostrar en mi pagina web.
  noticias: INoticias = {
    sources: [],
    status: ''
    
  };
  autores: any[] = [];
  categorias: any[] = [];
  paises: any[] = [];

  constructor(private noticiasService: NoticiaService ) {
    
   }

  async ngOnInit() {
    // noticias: Number = 20;
     this.noticias = await this.noticiasService.getAutores2();


//Bucles FOR con los cuales llamare a todas las noticias de la API y de esta simplemente cogeran los datos seleccionados
//en cada bucle como por ejemplo en una las categorias, otro los paises y otro los autores, y posteriormente los almacenan
//en el array que he creado arriba para poder mostrarlos en la pagina web.
   for (let noti of this.noticias.sources){
    if (this.categorias.indexOf(noti.category as string) < 0){
      this.categorias.push(noti.category as string);
     }
     if (this.paises.indexOf(noti.country as string) < 0){
      this.paises.push(noti.country as string);
      console.log(noti.country);
     }
     if (this.autores.indexOf(noti.id as string) < 0){
      this.autores.push(noti.id as string);
     }
  }
  

  // console.log(this.noticias);
  console.log(this.autores);
  // console.log(this.categorias);
  console.log(this.paises);

    //  console.log(this.noticias);
  }

  buscarNoticia() {                                                     //Funcion para buscar las noticias
    const PARAMETROS = {                                                //Constante para usar posteriormente a la hora de pasar parametros para las noticias
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado
    }


    this.parametrosSeleccionados.emit(PARAMETROS)

  }

  buscarAutor (){                                                     //Funcion para buscar los autores
    const PARAMETROS2 = {                                             //Constante para usar posteriormente a la hora de pasar parametros para el listado por autores
      autor: this.autorSeleccionado
    }

    this.parametros2Seleccionados.emit(PARAMETROS2)
  }

}
