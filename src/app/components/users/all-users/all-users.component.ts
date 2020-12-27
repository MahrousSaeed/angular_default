import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'
@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

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
