import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {UsersModule} from './components/users/users.module'
import {ProductsModule} from './components/products/products.module'
import {PostsModule} from './components/posts/posts.module'
import{RouterModule,Route,Routes} from '@angular/router'
const routes:Routes  = [
  {
    path:'',
    loadChildren: () => UsersModule,
  },
  {
    path:'users',
    loadChildren: () => UsersModule,
  },
  {
    path:'posts',
    loadChildren: () => PostsModule,
  },
  {
    path:'products',
    loadChildren: () => ProductsModule,
  },
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
