import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import PostService from "../services/post.service"

@Component({
  selector: 'postDetail',
  inputs: [ 'post' ],
  template: `<post [data]="post"></post>
            <h2>Comentarios:</h2>
            <comment *ngFor="let comment of post.comments" [data]="comment"></comment>
            <a [routerLink]="['/noticias']">Atras</a>
            <button type="button" (click)="upvote()">votar</button>
            <new-comment [postID]="post._id"></new-comment>`
})
export default class PostDetailComponent {

  constructor(route, postService) {
    this.route = route
    this.postService = postService
  }

  ngOnInit() {
    this.post = {}
    this.route.params.subscribe(params => {
      this.postService.getPost(params.id)
          .then(post => this.post = post)
          .catch(e => console.log(e));
    });
  }

  upvote() {
    this.post = this.postService.upvote(this.post._id)
  }

}

PostDetailComponent.parameters = [ActivatedRoute, PostService]
