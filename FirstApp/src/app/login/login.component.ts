import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username:string = '';
  public password:string = '';
  public status:string = '';

  public DoLogin(failcase:any):boolean
  {
    if (this.username == "parikshitverma" && this.password == "NahiBataunga") {
      this.status = "Login Successful!"
      failcase.style.borderColor = 'green'
      return true
    }
    this.status = "Login failed!"
    failcase.style.borderColor = 'red'
    return false
  }
  public DoCancel():void{
    this.username='';
    this.password='';
    this.status='';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
