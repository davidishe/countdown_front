import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent implements OnInit {

  constructor() { }
  @ViewChild('customInput', {static: false}) contentRef: ElementRef;



  ngOnInit() {
  }

  changeInput() {
    const value = this.contentRef.nativeElement.value;
    console.log(value);
    localStorage.setItem('TRYBE_NAME', value)
  }



}
