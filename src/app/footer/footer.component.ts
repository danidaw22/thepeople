import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private router : Router) { }

  mostrar = true;

  ngOnInit() {
      this.router.events.subscribe( result => {
        if(result instanceof NavigationEnd){
          let str = result.url
          let panel = str.split('/')
          console.log(panel[1])
          if(panel[1] == 'dashboard' || panel[1] == 'login' || panel[1] ==  'register'){
            this.mostrar = false
          } else {
            this.mostrar = true
          }
        }
      })

  }

}
