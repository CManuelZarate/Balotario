import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  error=false;
  codigo="";
  constructor() { }

  ngOnInit(): void {
  }
  //Validamos el codigo
  ingresar(){
    if(this.codigo==""){
      this.error=true;
      setTimeout(()=>{
        this.error=false;
      },2000)
    }
  }

}
