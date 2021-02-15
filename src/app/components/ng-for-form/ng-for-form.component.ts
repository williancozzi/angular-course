import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.css']
})
export class NgForFormComponent implements OnInit {

  name: string = "";
  phone: string = "";
  age: number = 0;
  city: string = "";

  cities = [
    { name: "São Paulo", state: "SP"},
    { name: "Curitiba", state: "PR"},
    { name: "Mafra", state: "SC"},
    { name: "Gama", state: "DF"},
  ];

  clients = [];

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.clients.push(
      {
        name: this.name,
        phone: this.phone,
        age: this.age,
        city: this.city,
      }
    );
    this.cancel();
    console.log(this.clients);
  }

  cancel() {
    this.name = "";
    this.phone = "";
    this.city = "";
    this.age = 0;
  }

  delete(i: number) {
    this.clients.splice(i, 1);

  }
}
