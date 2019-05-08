import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  posts = [
    {
      title : "Premier post",
      content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis dui non turpis maximus, id consequat ante dictum. Vivamus at interdum diam, vitae sollicitudin ligula. Nullam tristique consequat lacus, vitae dignissim justo euismod ut. Sed rutrum eros urna, sit amet fermentum tellus dignissim ac. In nisi nisi, commodo sed lectus vitae, varius maximus mi.",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title : "Deuxième post",
      content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis dui non turpis maximus, id consequat ante dictum. Vivamus at interdum diam, vitae sollicitudin ligula. Nullam tristique consequat lacus, vitae dignissim justo euismod ut. Sed rutrum eros urna, sit amet fermentum tellus dignissim ac. In nisi nisi, commodo sed lectus vitae, varius maximus mi.",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title : "Troisième post",
      content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis dui non turpis maximus, id consequat ante dictum. Vivamus at interdum diam, vitae sollicitudin ligula. Nullam tristique consequat lacus, vitae dignissim justo euismod ut. Sed rutrum eros urna, sit amet fermentum tellus dignissim ac. In nisi nisi, commodo sed lectus vitae, varius maximus mi.",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title : "Quatrième post",
      content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis dui non turpis maximus, id consequat ante dictum. Vivamus at interdum diam, vitae sollicitudin ligula. Nullam tristique consequat lacus, vitae dignissim justo euismod ut. Sed rutrum eros urna, sit amet fermentum tellus dignissim ac. In nisi nisi, commodo sed lectus vitae, varius maximus mi.",
      loveIts: 0,
      created_at: new Date()
    },
  ];
}
