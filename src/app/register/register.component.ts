import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  sForm: FormGroup

  constructor(private fb: FormBuilder, private router: Router) {
    this.sForm = this.fb.group({
      name:['',Validators.required, Validators.minLength(2)],
      password:['', [Validators.required, Validators.minLength(2)]],
      email:['', Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]
    })
   }

  ngOnInit() {
  }

  get f(): any{
    return this.sForm.controls
  }

  saveData(){

    console.log('entra')

    if(this.sForm.invalid){
      console.log("error, el formulario esta mal")
      return
    }

    console.log("He pulsado guardar", this.sForm)
  }


  login(){
    this.router.navigate(['/login'])
  }
}
