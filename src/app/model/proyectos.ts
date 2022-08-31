export class Proyectos {
   
    id?:number;
    nombreP:string;
    descripcionP:string;
    UrlP:string;

    constructor(nombreP:string,descripcionP:string,UrlP:string){
        this.nombreP=nombreP;
        this.descripcionP=descripcionP;
        this.UrlP=UrlP;
    }
}
