import { Component, OnInit } from '@angular/core';
import { Post } from './postComponent/postComponent';

@Component({
  selector: 'app-parent-post-component',
  templateUrl: './parent-post-component.component.html',
  styleUrls: ['./parent-post-component.component.less']
})
export class ParentPostComponentComponent implements OnInit {
  post: Partial<Post>;
  constructor() { }

  ngOnInit(): void {

  }

  getPostRecord():Post {
   return this.post = {
      id: 1,
      body: 'Rakul Body',
      myLike: false,
      title: 'Akhlesh Title',
      totalLikes: 10,
      userId: 1
    }

  }

}
