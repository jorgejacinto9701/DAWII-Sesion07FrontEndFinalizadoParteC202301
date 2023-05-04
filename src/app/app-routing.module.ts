import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaDocenteComponent } from './components/consulta-docente/consulta-docente.component';


const routes: Routes = [
  { path :"consultaDocente" , component:ConsultaDocenteComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
