import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  btnName = "my button";
  spinnerMode = "determinate";
  spinnerMode2 = "determinate";
  btnEnable = true;
  selectDisabled = false;
  selectedOption = '';
  name = null;

  constructor() { }

  ngOnInit(): void {
    this.spinnerMode2 = "indeterminate";
    setTimeout(() => {
      this.name = "will"
      this.spinnerMode2 = "determinate";
    }, 2000);
  }

  save() {
    console.log("click");
  }

  disable() {
    this.btnEnable = false;
    this.spinnerMode = "indeterminate";

    setTimeout( () => {
      this.btnEnable = true;
      this.spinnerMode = "determinate";
    }, 2000)
  }

  cbChange(event) {
    console.log(event.checked);
    this.selectDisabled = event.checked

  }

  selectChange(event) {
    this.selectedOption = event.value;
    console.log(this.selectedOption);
  }

  inputEvent(event) {
    console.log(event.target.value);
    this.name = event.target.value;

  }
}
