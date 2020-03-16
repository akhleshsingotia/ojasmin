import { Component, Input, Output,EventEmitter, OnInit } from '@angular/core';


@Component({
selector:'app-post',
templateUrl:'./postComponent.html',
styleUrls:['./postComponent.less']

})
export class postComponent implements OnInit{
  @Input() post :Partial<Post>;
  @Output() deleteMe = new EventEmitter<number>();

  ngOnInit(): void {

  }

like() {
  console.log(this.post.totalLikes);
    this.post.myLike = true;
    this.post.totalLikes=this.post.totalLikes+10;
    console.log(this.post.totalLikes);
  }

  dislike() {
    console.log(this.post.totalLikes);
      this.post.myLike = false;
      
      if (this.post.totalLikes) {
        this.post.totalLikes--;
      
        console.log(this.post.totalLikes);
    };

  }

}


export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
    totalLikes: number;
    myLike: boolean;
  }