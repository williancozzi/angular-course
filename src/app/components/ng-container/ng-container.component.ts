import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {

  users = [
    { login: "bob", role: "admin", lastlogin: new Date('2/1/2019')},
    { login: "liz", role: "user", lastlogin: new Date('11/11/2018')},
    { login: "jon", role: "user", lastlogin: new Date('12/12/2018')},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
