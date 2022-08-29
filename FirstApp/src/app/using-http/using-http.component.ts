import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-using-http',
  templateUrl: './using-http.component.html',
  styleUrls: ['./using-http.component.css']
})
export class UsingHttpComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  public propData:any
  public movieData:any
  public GetData(){
    this.http.get('http://jsonplaceholder.typicode.com/posts')
             .toPromise().then((data)=>{
              this.propData=data;
              console.log(data);
             });
  }
  public GetMovies(){
    this.http.get('https://localhost:7233/db/movies/all')
             .toPromise().then((data)=>{
              this.movieData=data;
              console.log(data);
             });
            }
          }
