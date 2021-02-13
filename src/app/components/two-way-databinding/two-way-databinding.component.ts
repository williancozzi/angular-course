import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-databinding',
  templateUrl: './two-way-databinding.component.html',
  styleUrls: ['./two-way-databinding.component.css']
})
export class TwoWayDatabindingComponent implements OnInit {

  name1: string = "";
  name2: string = "";

  client = {
    fName: "joao",
    lName: "silva"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
