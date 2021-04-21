import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  sForm: FormGroup

  constructor(private router: Router, private fb: FormBuilder) {
    this.sForm = this.fb.group({
      email:['', Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
      password:['', [Validators.required, Validators.minLength(9)]]
    })
  }

  ngOnInit() {
  }

  get f(): any{
    return this.sForm.controls
  }

  login(){
    console.log('entra')

    if(this.sForm.invalid){
      console.log("error, el formulario esta mal")
      return
    }

    console.log("He pulsado guardar", this.sForm)
  }

  register(){
    this.router.navigate(['/register'])
  }
}
