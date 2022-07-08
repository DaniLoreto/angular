import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicio/api/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormI } from 'src/app/modelos/form.interface';
import { formResponseI } from 'src/app/modelos/formResponse.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cotizacionForm = new FormGroup({
    modelId: new FormControl(0,Validators.required),
    brandId: new FormControl(0,Validators.required),
    year: new FormControl(0,Validators.required),
    carOwner: new FormControl(0,Validators.required),
    nationalId: new FormControl('',Validators.required),
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    birthdate: new FormControl('',Validators.required),
    countyId: new FormControl(0,Validators.required),
    phone: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    contactType: new FormControl('',Validators.required),
    carUseType: new FormControl('',Validators.required),
  })
 
  errorCotizacionId:boolean =false;
  errorMensaje:any ='';

  constructor(private api:ApiService) { }


  ngOnInit(): void {
  }

  onCotizacion(form:FormI){
    this.api.loginByDatos(form).subscribe(data =>{
      let dataResponse:formResponseI= data;
      if(dataResponse.resultsUrl){
        console.log("daniela")
      }else {
        this.errorCotizacionId = true;
        this.errorMensaje = dataResponse.id;
        //else {
        //this.cotizacionForm.controls['email'].setValue("")
        //this.cotizacionForm.value['email'] = "asd"
      }
    })
    }

}
