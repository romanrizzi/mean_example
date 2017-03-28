import { Component } from '@angular/core';
import PostService from '../services/post.service';

@Component({
  selector: 'new-comment',
  inputs: [ 'postID' ],
  template: `<form>
                Nuevo comentario:
                <input [(ngModel)]="attrs.author" placeholder="Autor" name="author">
                <textarea [(ngModel)]="attrs.body" placeholder="Contenido" name="body"></textarea>

                <button type="button" (click)="onSubmit(postID)">Submit</button>
             <form>`,
   providers: [ PostService ]
})
export default class NewCommentComponent {
  constructor(postService) {
    this.attrs = {}
    this.postService = postService
  }

  onSubmit(postID) {
    this.postService.createComment(postID, this.attrs)
    this.attrs = {}
  }
}

NewCommentComponent.parameters = [PostService]
