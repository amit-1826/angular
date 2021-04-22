import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from '@angular/common/http'
import {map, tap} from 'rxjs/operators';
import {Post} from './post.model';


export class PostService {
  constructor(private http: HttpClient) {

  }


  createPost(postData: Post) {
    return this.http
      .post(
        'https://my-project-c065f.firebaseio.com/posts.json',
        postData,
        {observe: 'response'}
      );
  }

  fetchPosts() {
    return this.http.get<{[key: string]: Post}>('https://my-project-c065f.firebaseio.com/posts.json',
    {
      headers: new HttpHeaders({'custom-header': '12345'}),
      params: new HttpParams().set('print', 'pretty'),
      responseType: 'json'  // response type can be used to get response in a particular format  // can be text, blob, json
    }
    )
    .pipe(map(res => {
      const postsArray = [];
      for (const key in res) {
        if (res.hasOwnProperty(key)) {
          postsArray.push({...res[key], id: key});
        }
      }
      return postsArray;
    }))
  }

  clearPosts() {
    return this.http.delete('https://my-project-c065f.firebaseio.com/posts.json',
    {
      observe: 'events',
      responseType: 'text'  // type text here determines the type of the response in a text format and not in json
    }).pipe(
      tap(response => {
      console.log('delete res', response, HttpEventType.Response);
    }));
  }

}
