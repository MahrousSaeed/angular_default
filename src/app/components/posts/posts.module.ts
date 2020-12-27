import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import {Route} from '@angular/router'
import { RouterModule } from '@angular/router';
const postsRoutes:Route[] = [
  {
    path:'',
    component:PostsComponent
  }
]

@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(postsRoutes)
  ]
})
export class PostsModule { }
