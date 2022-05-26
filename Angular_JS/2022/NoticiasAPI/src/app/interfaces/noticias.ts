

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