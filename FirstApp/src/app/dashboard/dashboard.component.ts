import { Component, OnInit, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { Person } from '../person';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public people:Person[] = [];

  public AddPerson(name:string, age:string, email:string) {
    var newPerson = new Person();
    newPerson.Name = name
    newPerson.Age = Number(age)
    newPerson.Email = email
    this.people.push(newPerson)    
  }
  public CantAddPeople() {
    
  }
  public GetAll() {
    return this.people;
  }
  public ChangeColor(funny:any) {
    funny.style.backgroundColor = 'black';
    console.log(funny.style)
  }
  public OnMouseOut(funny:any)
  {
    funny.style.backgroundColor = 'red';
  }

  constructor(private route:Router) { }
  public imageUrl:string[] = ["../assets/lol.jpg","../assets/lol.jpg","../assets/lol.jpg","../assets/lol.jpg"]
  ngOnInit(): void {
    
  }
  NavigateTo(){
    this.route.navigateByUrl("login");
  }
}
