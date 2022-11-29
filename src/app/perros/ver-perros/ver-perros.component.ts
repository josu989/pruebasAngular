import { Component, OnInit } from '@angular/core';
import { ApiPerrosService } from '../api-perros.service';
@Component({
  selector: 'app-ver-perros',
  templateUrl: './ver-perros.component.html',
  styleUrls: ['./ver-perros.component.css']
})
export class VerPerrosComponent implements OnInit {

  imagen: any;

  constructor(private perroService: ApiPerrosService) { }

  ngOnInit(): void {
    //subscripcion, si obtiene los datos de la API pero tiene un cors que no da acceso
    this.perroService.getPerros().subscribe(perro => this.imagen = perro)
  }

}
