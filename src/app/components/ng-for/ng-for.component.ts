import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  names = [
    "will",
    "jose",
    "maria",
    "lala"
  ];

  cities = [
    { name: "sao paulo", state: "SP"},
    { name: "curitiba", state: "PR"},
    { name: "mafra", state: "SC"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
