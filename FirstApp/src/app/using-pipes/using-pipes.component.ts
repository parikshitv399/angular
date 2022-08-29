import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-using-pipes',
  templateUrl: './using-pipes.component.html',
  styleUrls: ['./using-pipes.component.css']
})
export class UsingPipesComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  public goodWord:string = '';
}
