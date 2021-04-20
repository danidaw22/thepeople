import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router, private activeRoute : ActivatedRoute) { }

  name = "";

  dateStart = "";

  dateEnd = "";

  fecha = "";

  ngOnInit() {
    this.activeRoute.queryParams.subscribe( params => {
      //console.log(params.search)
      //params devuelve un array con los parametros
      //search es el valor del search de la home

      this.name = params.search
    })
  }

  changeName(){
    this.router.navigate(['search'], { queryParams: { search: this.name, dateStart: this.dateStart, dateEnd: this.dateEnd } });
  }

  changeDateStart(event :any){
    this.dateStart = moment(event.value).format('MM-DD-YYYY');
    this.router.navigate(['search'], { queryParams: { search: this.name, dateStart: this.dateStart, dateEnd: this.dateEnd } });
  }

  changeDateEnd(event :any){
    this.dateEnd = moment(event.value).format('MM-DD-YYYY');
    this.router.navigate(['search'], { queryParams: { search: this.name, dateStart: this.dateStart, dateEnd: this.dateEnd } });
  }

}
