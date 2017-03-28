import { Component } from '@angular/core';
import PostService from '../services/post.service';

@Component({
  selector: 'post',
  inputs: [ 'data' ],
  template: `<article>
              <header>{{data.title}}</header>
              {{data.content}}
              <footer>por {{data.author}} - {{data.upvotes}}</footer>
            </article>`
})

export default class PostComponent {}
