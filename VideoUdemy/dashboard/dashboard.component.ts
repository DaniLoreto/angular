import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  urlImagen='https://quo.eldiario.es/imagenes_quo/es.h-cdn.co/quoes/images/ser-humano/bugs-bunny-cumpleanos/1bugs_bunny_by_nostalgiaattack-d4j9rcn/960439-1-esl-ES/1bugs_bunny_by_nostalgiaattack-d4j9rcn.jpg?resize=480:*'

  constructor() { }

  ngOnInit(){}
    
  }
