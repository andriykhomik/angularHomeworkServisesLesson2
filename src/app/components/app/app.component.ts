import { Component } from '@angular/core';
import {PostService} from '../posts/service/post.service';
import {Post} from './models/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[];
  constructor(private postService: PostService) {
    postService.posts().subscribe(date => this.posts = date);
  }
}
