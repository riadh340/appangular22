import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

 sexes = [
    {value: 'Homme', viewValue: 'Homme'},
    {value: 'Femme', viewValue: 'Femme'},
    {value: 'Autre', viewValue: 'Autre'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
