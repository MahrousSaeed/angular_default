import { Component, OnInit } from '@angular/core';
import {SubjectsService} from '../../../subjects.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service:SubjectsService) {

  }
  ngOnInit(): void {
    this.service.userData.subscribe(res => {
      console.log('from profile com',res);
      
    })
  }

}
