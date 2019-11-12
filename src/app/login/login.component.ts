import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Post } from './post';
import { Observable } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';

@Injectable()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';

  posts: Observable<any>;
  newPost: Observable<any>;
  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  getPosts() {
    let headers = new HttpHeaders().set('Authorization', 'auth-token');
    // let params = new HttpParams().set('userId', '1');
    this.posts = this.http.get(this.ROOT_URL + '/posts', { headers })
  }

  createPost() {
    const data: Post = {
      id: null,
      userId: 23,
      title: 'My New Post',
      body: 'Hello World!'
    }

    this.newPost = this.http.post<Post>(this.ROOT_URL + '/foo', data).pipe(map(post => post.title)).pipe(retry(3)).pipe(catchError(err => {
      console.log(err);
      return Observable;
    }));
  }
}
