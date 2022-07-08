import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  text='tareas a realizar'
  listadoTareas:any[]= [
   // {donde: 'Logia' , tarea:'ordenar cosas extras', estado:'porCumplir'},
  {donde: 'cocina' , tarea:'revisar refrigerador', estado:'porCumplir'},
  {donde: 'cocina' , tarea:'enviar email por horno', estado:'Cumplido'},
    //{donde: 'ropa' , tarea:'guardar ropa limpia', estado:'porCumplir'}
  ]
  mostrar=true

  constructor(){
  }
  toogle():void{
    this.mostrar = !this.mostrar

  }
}
