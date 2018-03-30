import { Component, OnInit } from '@angular/core';
import {AppPipePipe} from '../../app-pipe.pipe';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

title:string = "hello word";
counter : number = 0;
name : string;
email : string;
phone : number;
about : string;
flat:boolean = true;
HEROES = [
  {id: 1, name:'Superman'},
  {id: 2, name:'Batman'},
  {id: 5, name:'BatGirl'},
  {id: 3, name:'Robin'},
  {id: 4, name:'Flash'}
];
result : any={};

constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
      this.result = data;
    });

  }
  showValue(name){
      alert (name);
  }

  decrement(){
    return this.counter --;
  }
  increment(){
    return this.counter ++;
  }
  submit(){
    let data = {
      name:this.name,
      email:this.email,
      phone:this.phone,
      about:this.about
    }

    localStorage.setItem('user',JSON.stringify(data));

  }

}