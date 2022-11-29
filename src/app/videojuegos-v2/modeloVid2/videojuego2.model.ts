//construccion de objeto de tipo empleado en el modelo empleado
export class videojuego2{
    //campos de clase
    id: number;
    nombre: string;
    desarrolladora: string;
    precio: number;
    clasificacion: string;
    //campos de clase y parametros del constructor son diferentes pero hacen referencia a lo mismo
                //parametros
    constructor(id:number,nombre:string, desarrolladora:string, precio:number, clasificacion:string){
        
/*referencia a campo de clase this.nombre=nombre <--igual al valor que se le pase por parametro*/
        this.id=id;
        this.nombre=nombre;
        this.desarrolladora=desarrolladora;
        this.precio=precio;
        this.clasificacion=clasificacion;
    }
}