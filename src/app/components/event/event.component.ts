import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  value: number = 0;
  title = "click buttons"

  constructor() { }

  ngOnInit(): void {
  }

  incValue(event) {
    console.log('entrou', event);
    this.value += event;


  }

}
