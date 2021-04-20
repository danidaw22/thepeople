import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-people',
  templateUrl: './detail-people.component.html',
  styleUrls: ['./detail-people.component.scss']
})
export class DetailPeopleComponent implements OnInit {

  constructor(private router: Router, private active : ActivatedRoute, private fb: FormBuilder) {
    this.detailForm = this.fb.group({
      name:['',Validators.required, Validators.minLength(2)],
      job:['', Validators.required, Validators.minLength(2)],
      birthdate:['', Validators.required],
      bio:['', Validators.minLength(20)],
      photo:[]
    })
  }

  editPerson = false;

  detailForm : FormGroup

  ngOnInit() {
    this.active.params.subscribe( params => {
      if(params.id){
        this.editPerson = true;
      }
    })
}


saveData(){
  console.log('entra')

    if(this.detailForm.invalid){
      console.log("error, el formulario esta mal")
      return
    }

    console.log("He pulsado guardar", this.detailForm)
  }
}

