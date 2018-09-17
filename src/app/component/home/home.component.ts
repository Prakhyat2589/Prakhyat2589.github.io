import { Component, OnInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  //Carousel
  myInterval = 0;
  activeSlideIndex = 0;
 
  slides = [
    {image: './src/app/component/images/carousel-1.jpg'},
    {image: './src/app/component/images/carousel-2.jpg'}
  ];

  //Rating
  max: number = 10;
  rate: number = 7;
  isReadonly: boolean = false;

  
  constructor(
   
  ) {}
  
  ngOnInit() { }
}


  