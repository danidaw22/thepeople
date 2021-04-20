import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router) { }

  changeBackground = false;

  mostrar = true;

  ngOnInit() {
    this.router.events.subscribe( result => {
      if(result instanceof NavigationEnd){
        if(result.url == "/search" || result.url == "/detail"){
          this.changeBackground = true
        }else {
          this.changeBackground = false
        }

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

  login(){
    this.router.navigate(["upload-new"])
  }

  addnew(){
    this.router.navigate(["upload-new"])
  }
}
