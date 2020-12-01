import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-test2',
  templateUrl: './route-test2.component.html',
  styleUrls: ['./route-test2.component.css']
})
export class RouteTest2Component implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }
  navigate_to_page(url: string) {
    
    console.log(url)
   
    console.log(['/' + url])
    this.router.navigate(['/' + url])
  }
}
