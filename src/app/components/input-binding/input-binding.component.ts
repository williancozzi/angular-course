import { Component, Input, OnInit } from '@angular/core';
import { Client } from './client/client.model';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {

  @Input()
  name: string;

  clients: Client[];

  constructor() {
    this.clients = [
      {id:1, name:"Bob", age:33},
      {id:2, name:"Jon", age:22},
      {id:3, name:"Lea", age:19}
    ]
  }

  ngOnInit(): void {
  }

}
