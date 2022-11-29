import { Component, OnInit, Input } from '@angular/core';
import { videojuego } from './Modevidelojuegos/videojuegos.model';
import { Table } from 'primeng/table';
import { ServicioVideojuegosService } from './servicioVid/servicio-videojuegos.service';
import { FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit {
//propiedades
listadeVideojuegos: videojuego [];
//propiedades de la tabla

//modal en falso para que no este abierto todo el tiempo
modal: boolean = false;
  //propiedades del formulario
 formulario: FormGroup;
  nombre: string;
  desarrolladora:string;
  precio:number;
  clasificacion:string;

  constructor(private servicioJuegos: ServicioVideojuegosService) { }

  ngOnInit(): void {
    /*Acudimos al servicio servicioJuegos para injectar los datos que tiene el servicio del arreglo de listadejuegos del servicio*/
    this.listadeVideojuegos = this.servicioJuegos.listadeVideojuegos;
  }

//metodo limpiar tabla
limpiarTabla(tabla: Table){
tabla.clear();
}
//abrir modal para agregar juego
abrirModal(){
  this.modal= true;
}
/*pasamos el parametro de la tabla de tipo tabla para para que cuendo se guarde
algun juego refresquemos la tabla y se actualizen los numeritos de busqueda de abajo*/
  agregarJuego(tabla: Table){
    //declaracion de variable para almacenar un objeto de tipo videojuego e instanciamos la clase videojuego en los cuadros del formulario
    let mijuego=new videojuego(this.nombre, this.desarrolladora, this.precio, this.clasificacion);
    //agrega el empleado desde el metodo del servicio
    this.servicioJuegos.agregarJuegos(mijuego);
    (<HTMLFormElement>document.getElementById("agregar")).reset(); //resetea el formulario
    tabla.clear(); //refrescamos para que los numeritos de abajo de la tabla se actualizen
    this.modal= false;
  }
  //metodo de cancelar
  cancelar(){
    (<HTMLFormElement>document.getElementById("agregar")).reset(); //resetea el formulario
    this.modal= false;
  }
}

/*<form #your_form_name (ngSubmit)="submitData()"> </form>

<button (click)="clearForm(Your_form_name)"> clear form </button>
en su archivo componente.ts

clearForm(form: FormGroup) {
form.reset();
} */