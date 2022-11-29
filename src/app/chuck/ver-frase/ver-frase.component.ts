import { Component, OnInit } from '@angular/core';
//importamos el servicio
import { ServicioApiService } from '../servicio-api.service';
import { Frase } from '../frase';

@Component({
  selector: 'app-ver-frase',
  templateUrl: './ver-frase.component.html',
  styleUrls: ['./ver-frase.component.css']
})
export class VerFraseComponent implements OnInit {
//propiedades
public frase: Frase = { value: "", icon_url: "", id: "", url: "" };


  constructor(private apiService: ServicioApiService) { }

  ngOnInit() {
    //subscripcion al servicio
    this.apiService.getFrase().subscribe(frase => (this.frase = frase));
    
  }

  
}
