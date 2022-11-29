import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiUsuarioService } from '../api-usuario.service';
import { Table } from 'primeng/table';
//importamos para exportar a PDF
import jsPDF from "jspdf";
import html2canvas from 'html2canvas';
//import autoTable from 'jspdf-autotable';
//declare let jsPDF;
/*
declare var require: any;
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;*/

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  //propiedades
  listadeUsuarios: any = []; //lista de usuarios
 //propiedades de la tabla de primeNG
 //arreglo de columnas de la tabla dinamica 
  //columnas: any[]; 
   //estatus de la tabla
    status: any[];
    modal: boolean = false;
  //propiedades del formulario solo de emulacion por que realmente no hace nada, solo esta construido
  id: number;
  name:string;
  username:string;
  email:string;
  companyName:string;

  constructor(private servicioUusario : ApiUsuarioService) { }

  ngOnInit() {
    //subscripcion
    this.servicioUusario.getUsuarios().subscribe(response => this.listadeUsuarios = response)
  //instancia de columnas, lo ponemos en un arreglo que sera el arreglo de los campos
  //los field seran los atrobutos o propiedades con los que viene declarado el archivo json en este caso, checar: https://jsonplaceholder.typicode.com/users
    /*this.columnas =[
      {field: 'id', header: 'Id'},
      {field: 'name', header: 'Nombre'},
      {field: 'username', header: 'Username'},
      {field: 'company', header: 'Compañia'}
    ];*/
    //instancia y arreglo de los status
   /* this.status = [
      {label: 'Unqualified', value: 'unqualified'},
      {label: 'Qualified', value: 'qualified'},
      {label: 'New', value: 'new'},
      {label: 'Negotiation', value: 'negotiation'},
      {label: 'Renewal', value: 'renewal'},
      {label: 'Proposal', value: 'proposal'}
  ]*/
  }
  //metodo de limpiar la tabla
  clear(table: Table) {
    table.clear();
}
public exportarPDF(): void{
  let datos: any = document.getElementById('miTabla'); //obteniendo los elementos del id de la tabla
  html2canvas(datos).then((canvas) => {
    let fileWidth = 208;
    let fileHeight = (canvas.height * fileWidth) / canvas.width;
    const FILEURI = canvas.toDataURL('image/png');
    let PDF = new jsPDF('p', 'mm', 'a4');
    let position = 0; //posicion de la hoja
    PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
    PDF.save('prueba.pdf');
  });
}
/*Metodo para mostrar el modal*/
mostrarModal(){
  this.modal= true;
}
/*Metodo de cerrar el modal al dar el boton cancelar en el formulario*/
cerrarModal(){
  this.modal= false;
}
/*metodo para exportar la tabla a pdf, solo funciona hasta angular 13
@ViewChild('miTabla')
miTabla!: ElementRef;

public exportarPDF() {
  const tablaPDF = this.miTabla.nativeElement;
  var html = htmlToPdfmake(tablaPDF.innerHTML);
  const documento= { content: html };
  pdfMake.createPdf(documento).download(); 
}
/*exportarPDF(){
  const documento = new jsPDF('p','pt');
  documento['autoTable'](this.listadeUsuarios);
  documento.save("usuarios.pdf");
}*/

/*metodos del formulario*/

}
