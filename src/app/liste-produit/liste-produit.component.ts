import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import"rxjs/add/operator/map" ;
import {MatTableModule} from '@angular/material/table';
import {AppPipePipe} from '../app-pipe.pipe';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ListeProduitComponent implements OnInit {
 results : any=[];
 HEROES = [
  {id: 1, name:'Superman'},
  {id: 2, name:'Batman'},
  {id: 5, name:'BatGirl'},
  {id: 3, name:'Robin'},
  {id: 4, name:'Flash'}
];
 
  constructor(private http:HttpClient) { }

  ngOnInit() {
  this.http.get('https://jsonplaceholder.typicode.com/posts')
 
  .subscribe(data => {
      this.results = data;
    });
  }

}
