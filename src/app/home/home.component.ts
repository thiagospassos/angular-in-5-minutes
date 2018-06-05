import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts;
  constructor(private postService: PostService) { }
  ngOnInit() {
    this.postService.getPosts()
    .subscribe(ps=>{
      this.posts = ps;
    })
  }
}
