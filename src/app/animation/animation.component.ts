import { Component, OnInit } from '@angular/core';
import {animate, transition, trigger,state,style} from '@angular/animations'

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations:[trigger('openClose',[
    state('open',style({
      height:'300px',
      backgroundColor:'green'
    })),
    state('close',style({
      height:'50px',
      backgroundColor:'blue'
    })),
    transition('open=>close',[
      animate('1s')
    ]),
    transition('close=>open',[
      animate('2s')
    ])
  ])]
})
export class AnimationComponent implements OnInit {

  isOpen=true;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.isOpen=!this.isOpen
  }

}
