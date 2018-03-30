import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
sexes = [
    {value: 'Homme', viewValue: 'Homme'},
    {value: 'Femme', viewValue: 'Femme'},
    {value: 'Autre', viewValue: 'Autre'}
  ];
 

  constructor() { }

  ngOnInit() {
   
  }

}
