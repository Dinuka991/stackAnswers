import { Component, OnInit } from '@angular/core';
import { StackService } from '../stack.service';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})
export class StackComponent implements OnInit {


  test: string | undefined ;
  constructor(private stackService: StackService) { }

  ngOnInit(): void {

    this.stackService.test().subscribe(res => this.test = res);
   
  }

}
