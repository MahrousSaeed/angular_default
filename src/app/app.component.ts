import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular';
  myForm:FormGroup
  ngOnInit(){
    this.myForm = new FormGroup({
      email:new FormControl(""),
      password: new FormControl("")
    })
  }
  onSubmit = (data) => {
    console.log(data.value);
    
  }
}
