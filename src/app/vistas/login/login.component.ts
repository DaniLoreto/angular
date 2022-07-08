import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicio/api/api.service';
import { lastValueFrom, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ResponseI } from 'src/app/modelos/response.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private apiService:ApiService, private router:Router) { }

  


  ngOnInit(): void {
    this.getAuth()
  }
  async getAuth(){
    try {
      let data= await lastValueFrom(this.apiService.getAuth())
        try { 
          this.apiService.getAuth().subscribe(data => {
            let dataResponse:ResponseI = data
            if(dataResponse.username == 'transatuauto'){
             localStorage.setItem("accessToken",dataResponse.accessToken)
             localStorage.getItem("accessToken");
             this.router.navigate(['dashboard'])
             console.log("daniela")
           }
          })
        } catch (error) {
        }
    } catch (error) {
    }
  }

}