import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './vistas/login/login.component'
import { Routes, RouterModule} from '@angular/router'
import { DashboardComponent } from './vistas/dashboard/dashboard.component';
import { NuevoComponent } from './vistas/nuevo/nuevo.component';
import { EditarComponent } from './vistas/editar/editar.component';


const routes: Routes =[
  {path:'' , redirectTo:'login', pathMatch: 'full'},
  {path:'login', component:LoginComponent},
  {path:'dashboard' , component:DashboardComponent},
  {path:'nuevo', component:NuevoComponent},
  {path:'editar', component:EditarComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule    
  ]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, DashboardComponent, NuevoComponent, EditarComponent]
