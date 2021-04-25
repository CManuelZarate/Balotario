import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  constructor(private fb:FormBuilder) {
    this.loginForm = this.fb.group({
      usuario:["",[Validators.required,Validators.email] ],//no mostramos nada por defecti y pasamos las validaciones
      password:["",Validators.required]
    })//logiform igual a la clase  y va ser tipo group, le pasamos 2campos (usuario,contraseña) 
   }

  ngOnInit(): void {
  }

  login(){
    console.log(this.loginForm)
  }

}
