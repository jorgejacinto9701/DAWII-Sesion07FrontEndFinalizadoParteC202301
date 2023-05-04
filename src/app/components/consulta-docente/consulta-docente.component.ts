import { Component, OnInit } from '@angular/core';
import { Docente } from 'src/app/models/docente.model';
import { Ubigeo } from 'src/app/models/ubigeo.model';
import { DocenteService } from 'src/app/services/docente.service';
import { UbigeoService } from 'src/app/services/ubigeo.service';

@Component({
  selector: 'app-consulta-docente',
  templateUrl: './consulta-docente.component.html',
  styleUrls: ['./consulta-docente.component.css']
})
export class ConsultaDocenteComponent implements OnInit {

  //Ng model
  nombre:string="";
  dni:string="";
  selDepartamento:string = "-1"; 
  selProvincia:string = "-1"; 
  selDistrito:number = -1;
  estado:boolean = true;
  
  //Ubigeo
  departamentos: string[]  = [];
  provincias: string[]  = [];
  distritos: Ubigeo[]  = [];

  //Grila
  docentes: Docente[] = [];

  constructor(private ubigeoService: UbigeoService,private docenteService:DocenteService) { 
    this.ubigeoService.listarDepartamento().subscribe(
        x => this.departamentos = x
    );
  }

  cargaProvincia(){
      this.ubigeoService.listaProvincias(this.selDepartamento).subscribe(
        x => this.provincias = x
      );
      this.selProvincia = "-1" 
      this.selDistrito = -1 
      this.distritos = [];
  }

  cargaDistrito(){
      this.ubigeoService.listaDistritos(this.selDepartamento, this.selProvincia).subscribe(
        x => this.distritos = x
      );
      this.selDistrito = -1 
  }

  consultaDocente(){
        //Si el switch SI esta seleccionado (true) debe devolver 1
        //Si el switch NO esta seleccionado (false) debe devolver 0
        var intEstado = this.estado ? 1 : 0;
        this.docenteService.listaDocente(this.nombre, this.dni,  this.selDistrito, intEstado).subscribe(
              x => {
                    this.docentes = x.lista
              }
        );
  }

  ngOnInit(): void {}

}
