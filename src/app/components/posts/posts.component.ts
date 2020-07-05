import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../app/models/Post';
import {PostService} from './service/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input()
  post: Post;
  constructor(private postService: PostService) {

  }
  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  showComments(id: number): void {
    this.postService.commentOfsinglePost(id).subscribe(date => console.log(date));
  }
}
