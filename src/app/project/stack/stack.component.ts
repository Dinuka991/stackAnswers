import { stringify } from '@angular/compiler/src/util';
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

   console.log(Colors[0])


  }

}
export enum Colors {
  RED,
  BLUE,
  springfy
}
