import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people = [
    {
      nombre:'Elon Musk',
      fecha:"28 de octubre 1955",
      image:"main-1.png",
      categoria:"The boss",
      bio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
