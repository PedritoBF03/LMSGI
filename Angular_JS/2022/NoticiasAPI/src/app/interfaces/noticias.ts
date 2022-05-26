//Interfaces donde nombrare los parametros de los que disponen las noticias que son dos y
//otra interfaz para mostrar todos los apatados que tiene nuestra Api en cada noticia.

export interface INoticia {
    category: string;
    country: string;
    description: string;
    id: string;
    languaje: string;
    url: string;
    name: string;
}

export interface INoticias {
    sources: INoticia[];
    status: string;
}
