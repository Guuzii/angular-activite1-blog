import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postDate: Date;
  @Input() postLikes: number;

  constructor() { }

  ngOnInit() {
  }

  getColor() {
    if (this.postLikes > 0) {
      return "green";
    }
    else if (this.postLikes < 0) {
      return "red";
    }
  }

  likeIt() {
    this.postLikes ++;
    console.log(this.postLikes);
  }

  dontLikeIt() {
    this.postLikes --;
    console.log(this.postLikes);
  }
}
