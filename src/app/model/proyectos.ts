export class Proyectos {
   
    id?:number;
    nombreP:string;
    descripcionP:string;
    urlP:string;

    constructor(nombreP:string,descripcionP:string,urlP:string){
        this.nombreP=nombreP;
        this.descripcionP=descripcionP;
        this.urlP=urlP;
    }
}
