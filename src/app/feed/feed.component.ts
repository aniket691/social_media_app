import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  posts: any[] = [];
  totalPosts: number = 50;  // Number of posts to simulate
  pageSize: number = 5;     // Number of posts per load
  currentPage: number = 1;
  visibleComments: { [key: number]: boolean } = {};
  likedPosts: { [key: number]: boolean } = {};

  constructor() {}

  ngOnInit(): void {
    this.loadInitialPosts();
  }

  loadInitialPosts() {
    this.posts = this.generateDummyPosts(this.pageSize * this.currentPage);
  }

  generateDummyPosts(count: number) {
    let dummyPosts = [];
    for (let i = 1; i <= count; i++) {
      dummyPosts.push({
        id: i,
        user: {
          avatar: `https://i.pravatar.cc/150?img=${i}` // Dummy avatar
        },
        imageUrl: `https://picsum.photos/500/300?random=${i}`, // Random image from Picsum
        // caption: `This is the caption for post ${i}.`,
        time: `${i} hours ago`,
        likes: Math.floor(Math.random() * 1000),
        comments: [
          { user: `Commenter ${i}`, text: `  This is a comment on post ${i}.  ` },
        ]
      });
    }
    return dummyPosts;
  }

  onScroll() {
    if (this.posts.length < this.totalPosts) {
      this.currentPage++;
      const newPosts = this.generateDummyPosts(this.pageSize * this.currentPage);
      this.posts = newPosts.slice(0, this.posts.length + this.pageSize);
    }
  }

  toggleComments(postId: number) {
    this.visibleComments[postId] = !this.visibleComments[postId];
  }

  toggleLike(postId: number) {
    this.likedPosts[postId] = !this.likedPosts[postId];
  }
  
}

