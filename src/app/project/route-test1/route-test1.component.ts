import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-route-test1',
  templateUrl: './route-test1.component.html',
  styleUrls: ['./route-test1.component.css']
})
export class RouteTest1Component implements OnInit {

  constructor( private router: Router  ) { }

  ngOnInit(): void {

  }
  navigate_to_page(url: string) {
    
    console.log(url)
   
    console.log(['/' + url])
    this.router.navigate(['/' + url])
  }

}
