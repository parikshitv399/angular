import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.css']
})
export class UserregComponent implements OnInit {
  public name:string = '';
  public username:string = '';
  public password:string = '';
  public confirmPassword:string = '';
  public email:string = '';
  public dob:any = '';
  public status:string = '';

  public DoReg():boolean
  {
    if (this.confirmPassword == this.password) {
      this.status = "Registration Successful!"
      return true
    }
    this.status = "Login failed!"
    return false
  }
  public DoCancel():void{
    this.name='';
    this.username='';
    this.password='';
    this.confirmPassword='';
    this.email='';
    this.dob='';
    this.status='';
  }


  constructor() { }

  ngOnInit(): void {
  }

}
