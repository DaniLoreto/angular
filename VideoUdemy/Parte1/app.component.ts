import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Daniela';
  //variable con dato
  textPlaceholder='Ingresa algun dato aquí! ';
  //texto que se encuentra dentro del imput
  deshabilitado = false
  //variable que muestra o no el input
  //bugsBunny='https://quo.eldiario.es/imagenes_quo/es.h-cdn.co/quoes/images/ser-humano/bugs-bunny-cumpleanos/1bugs_bunny_by_nostalgiaattack-d4j9rcn/960439-1-esl-ES/1bugs_bunny_by_nostalgiaattack-d4j9rcn.jpg?resize=480:*'
  //variable que contiene la imagen 
  texto='ya tengo hambre';
  //texto inicial cambiara al presionar el boton
  variableVacia='';
  //variable vacia
  constructor(){
    setInterval(()=>this.nombre='Alonso',3000) 
    //se setea la variable a otro nombre despues de 3000 segundos, 
    setInterval(()=>this.deshabilitado=true,3000) 
    //se setea la variable a otro deshabilita el input despues de 3000 segundos

  }
  cambiarTexto():void{
    this.texto = 'menos mal ya tengo la carne lista'
//lo que mostrara el boton al presionar
  }
  getSuma(numero1:number, numero2:number){
    return numero1 + numero2
  }

}
