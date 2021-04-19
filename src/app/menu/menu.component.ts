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

  ngOnInit() {
    this.router.events.subscribe( result => {
      if(result instanceof NavigationEnd){
        if(result.url == "/search" || result.url == "/detail"){
          this.changeBackground = true
        }else {
          this.changeBackground = false
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
