import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  sForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.sForm = this.fb.group({
      password:['dani', [Validators.required, Validators.minLength(2)]],
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

}
