import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.css']
})
export class ChildItemComponent implements OnInit {

  @Input() title: string;
  @Output('increment-value') incrementValue = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  valueEmit(number: number, operator: '+' | '-') {
    let value = operator + number;

    this.incrementValue.emit(
      parseInt(value)
    )
  }

}
