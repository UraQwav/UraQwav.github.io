import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-skils',
  templateUrl: './my-skils.component.html',
  styleUrls: ['./my-skils.component.css'],
  animations: [
    trigger('opacityLeave', [
      transition(':enter', [
        style({opacity: 0}),
        
        style({ transform: 'translateX(25%)' }),
        // animate(600 )
        animate('0.5s ease-in')
      ])
      // ,
      // transition(':leave', [
      //   animate('0.5s', style({opacity: 0}))
      // ])
     ])
  ]
})
export class MySkilsComponent implements OnInit {

  flagSkilOne: boolean;
  flagSkilTwo: boolean;
  flagSkilThree: boolean;
  flagSkilFoyr: boolean;

  constructor(public router:Router) { 
    this.flagSkilOne = true;
    this.flagSkilTwo = false;
    this.flagSkilThree = false;
    this.flagSkilFoyr = false;
  }

  ngOnInit(): void {
  }
  
  skilOne(){
    this.flagSkilOne = true;
    this.flagSkilTwo = false;
    this.flagSkilThree = false;
    this.flagSkilFoyr = false;
  }

  skilTwo(){
    this.flagSkilOne = false;
    this.flagSkilTwo = true;
    this.flagSkilThree = false;
    this.flagSkilFoyr = false;
  }

  skilThree(){
    this.flagSkilOne = false;
    this.flagSkilTwo = false;
    this.flagSkilThree = true;
    this.flagSkilFoyr = false;
  }

  skilFour(){
    this.flagSkilOne = false;
    this.flagSkilTwo = false;
    this.flagSkilThree = false;
    this.flagSkilFoyr = true;
  }
  front(){
    this.router.navigate(["portfolio"])
  }
}
