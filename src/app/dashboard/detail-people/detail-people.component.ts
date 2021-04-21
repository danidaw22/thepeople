import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from "rxjs";
import { map, finalize } from "rxjs/operators";

@Component({
  selector: 'app-detail-people',
  templateUrl: './detail-people.component.html',
  styleUrls: ['./detail-people.component.scss']
})
export class DetailPeopleComponent implements OnInit {

  constructor(private router: Router, private active : ActivatedRoute, private fb: FormBuilder, private storage:AngularFireStorage) {
    this.detailForm = this.fb.group({
      name:['',[Validators.required, Validators.minLength(2)]],
      job:['', [Validators.required, Validators.minLength(2)]],
      birthdate:['', Validators.required],
      bio:['', Validators.minLength(20)],
      photo:[]
    })
  }

  editPerson = false;

  detailForm : FormGroup

  isSend = false;

  selectedFile: File | undefined;

  fb2: any;

  downloadURL: Observable<string> | undefined;

  ngOnInit() {
    this.active.params.subscribe( params => {
      if(params.id){
        this.editPerson = true;
      }
    })
    //añadir valores al formulario
   /* this.detailForm.patchValue({
      name:"dani"
    })*/
}

get f(): any{
  return this.detailForm.controls
}

onFileSelected(event: any) {
  var n = Date.now();
  const file = event.target.files[0];
  const filePath = `RoomsImages/${n}`;
  const fileRef = this.storage.ref(filePath);
  const task = this.storage.upload(`RoomsImages/${n}`, file);
 task
    .snapshotChanges()
    .pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL();
        this.downloadURL.subscribe(url => {
          if (url) {
            this.fb2 = url;
          }
          console.log(this.fb2);
        });
      })
    )
    .subscribe(url => {
      if (url) {
        console.log(url);
      }
    });
}

saveData(){
  console.log('entra')
  //obtener valores del formulario
  //this.sForm.controls["nombre"].value
    this.isSend = true;

    if(this.detailForm.invalid){
      console.log("error, el formulario esta mal")
      return
    }

    console.log("He pulsado guardar", this.detailForm)
  }
}

