import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'
import {SubjectsService} from './subjects.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular';
  // constructor(private service:SubjectsService){}
  ngOnInit(){
    // this.service.userData.subscribe(res => {
    //   console.log('from app com',res);
      
    // })
  }

}
