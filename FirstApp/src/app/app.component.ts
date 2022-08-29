import { Component } from '@angular/core';

@Component({
  selector: 'container',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstApp';
  name = 'Parikshit';
  public DoSomething():string{
    return this.name + " did something ;)"
  }
}
