import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {

  @ViewChild("stopwatch2")
  myTimer: TimerComponent;

  @ViewChild("myP")
  myp: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  start() {
    this.myTimer.start();
  }

  stop() {
    this.myTimer.stop();
  }

  reset() {
    this.myTimer.reset();
  }

  ngAfterViewInit() {
    console.log(this.myp);

  }

}
