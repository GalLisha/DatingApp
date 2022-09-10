import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  users: any;

  constructor(private http: HttpClient){}
  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
   // this.http.get('https://localhost:5001/api/users').subscribe(Response =>{
      //this.users = Response;
   // },error =>{
    //     console.log(error);
  //  }) 
  this.http.get('https://localhost:5001/api/users').subscribe({
    next: (Response) =>{
      this.users = Response;
     },
    error: (error) =>{
        console.log(error);
       },
      });
    }


}
