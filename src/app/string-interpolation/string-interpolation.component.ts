import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  person = {
    firstName: "Willian",
    lastName: "Candido",
    age: 34,
    address: "rua 12 sul"
  }

  middlename = '';
  constructor() { }

  ngOnInit(): void {
  }

}
