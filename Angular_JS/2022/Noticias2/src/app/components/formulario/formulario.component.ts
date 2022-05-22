import { Component,EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() parametrosSeleccionados = new EventEmitter<any>()
  @Output() parametros2Seleccionados = new EventEmitter<any>()

  categoriaSeleccionada = 'general';
  paisSeleccionado = 'ar';
  autorSeleccionado = 'associated-press';


  categorias: any[] = [
    { value: 'general', nombre: 'General'},
    { value: 'business', nombre: 'Negocios'},
    { value: 'entertainment', nombre: 'Entretenimiento'},
    { value: 'health', nombre: 'Salud'},
    { value: 'science', nombre: 'Ciencia'},
    { value: 'sports', nombre: 'Deportes'},
    { value: 'technology', nombre: 'Tecnología'},
]

paises: any[] = [
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

autores: any[] = [
  { value: 'associated-press', nombre: 'Associated-press' },
  { value: 'cnn', nombre: 'cnn' },
  { value: 'politico', nombre: 'Politico' },
  { value: 'al-jazeera-english', nombre: 'Cal-jazeera-english' },
  { value: 'usa-today', nombre: 'Usa-today' },
]

  constructor() { }

  ngOnInit(): void {
  }

  buscarNoticia() {
    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado
    }


    this.parametrosSeleccionados.emit(PARAMETROS)

  }

  buscarAutor (){
    const PARAMETROS2 = {
      autor: this.autorSeleccionado
    }

    this.parametros2Seleccionados.emit(PARAMETROS2)
    //autor: this.autorSeleccionado
  }

}
