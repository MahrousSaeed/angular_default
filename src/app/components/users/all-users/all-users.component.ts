import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'
import {SubjectsService} from '../../../subjects.service'
// import {Subject} from 'rxjs'
@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users = ['user 1','user 2','user 3','user 4']
  // userSubject = new Subject()
  myForm:FormGroup
  constructor(private service:SubjectsService) {

  }
  ngOnInit(){
    this.myForm = new FormGroup({
      email:new FormControl(""),
      password: new FormControl("")
    })
  }
  onSubmit = (data) => {
    console.log(data.value);
    
    
  }
  sendUser = (user) => {
    console.log(user);
    this.service.userData.next(user)
    this.service.userData.next('222')
  }
}
