import { Component } from '@angular/core';
import PostService from '../services/post.service';

@Component({
  selector: 'app-view',
  template: `<h1>Bienvenidos a {{name}}</h1>
            <post *ngFor="let item of posts" [data]="item"></post>

            <newPost></newPost>`,
  providers: [ PostService ]
})
export default class AppComponent {
  constructor(postService) {
    this.name = 'Noticias UNQ',
    this.posts = postService.posts;
  }
}

AppComponent.parameters = [PostService]
