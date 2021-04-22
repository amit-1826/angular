import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { PostService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;

  constructor(private http: HttpClient,
    private postService: PostService) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    this.postService.createPost(postData)
    .subscribe(responseData => {
      console.log('responseData: ', responseData);
      this.fetchPosts();
    }, (error) => {
      console.log('error: ', error);
    });
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  private fetchPosts() {
    this.isFetching = true;
    this.postService.fetchPosts()
    .subscribe((response: Post[]) => {
      this.isFetching = false;
      console.log('get response: ', response);
      this.loadedPosts = response;
    }, (error: HttpErrorResponse) => {
      this.isFetching = false;
      this.error = error.message;
    })
  }

  onClearPosts() {
    this.postService.clearPosts().subscribe(response => {
      this.loadedPosts = [];
    })
  }
}
