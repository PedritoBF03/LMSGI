import { Component,EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() parametrosSeleccionados = new EventEmitter<any>()               //Es una expecie de export para poder utilizarlo en otro ts
  @Output() parametros2Seleccionados = new EventEmitter<any>()

  categoriaSeleccionada = 'general';                                        //Aquí almacenare en esta variable el valor con el cual yo querre buscar y reflejar en mi html
  paisSeleccionado = 'ar';                                                  //Se usan varibles debido a que dependiendo lo que nosotros seleccionemos en nuestro formulario
  autorSeleccionado = 'associated-press';                                   //El valor cambiara pero por defecto les vamos a asignar un valor para que no de problemas


  categorias: any[] = [                                                      //Aquí asigno los valores a los respondera mi formulario en el apartado categoria
    { value: 'general', nombre: 'General'},
    { value: 'business', nombre: 'Negocios'},
    { value: 'entertainment', nombre: 'Entretenimiento'},
    { value: 'health', nombre: 'Salud'},
    { value: 'science', nombre: 'Ciencia'},
    { value: 'sports', nombre: 'Deportes'},
    { value: 'technology', nombre: 'Tecnología'},
]

paises: any[] = [                                                      //Aquí asigno los valores a los respondera mi formulario en el apartado pais
  { value: 'se', nombre: 'Pais'},
  { value: 'us', nombre: 'Estados Unidos'},
  { value: 've', nombre: 'Venezuela'},
  { value: 'ar', nombre: 'Argentina'},
  { value: 'br', nombre: 'Brasil'},
  { value: 'fr', nombre: 'Francia'},
  { value: 'hu', nombre: 'Hungria'},
  { value: 'mx', nombre: 'Mexico'},
  { value: 'gb', nombre: 'Reino Unido'},
]

autores: any[] = [                                                      //Aquí asigno los valores a los respondera mi formulario en el apartado autores
  { value: 'associated-press', nombre: 'Associated-press' },
  { value: 'cnn', nombre: 'cnn' },
  { value: 'politico', nombre: 'Politico' },
  { value: 'al-jazeera-english', nombre: 'Cal-jazeera-english' },
  { value: 'usa-today', nombre: 'Usa-today' },
  { value: 'la-nacion', nombre: 'La Nacion' },
  { value: 'google-news', nombre: 'Google News' },
  { value: 'infobae', nombre: 'Infobae' },
]

  constructor() { }

  ngOnInit(): void {
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
