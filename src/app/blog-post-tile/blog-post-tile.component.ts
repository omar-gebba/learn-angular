import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../blog-post';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.css']
})
export class BlogPostTileComponent implements OnInit {
  
  @Input() post: BlogPost;
  allSummary: string;
  constructor(private truncatePipe: TruncatePipe) { }

  ngOnInit() {
    
    this.allSummary = this.post.summary;
    this.post.summary = this.truncatePipe.transform(this.post.summary, [3]);
  }
  showAllSummary()
  {
    this.post.summary = this.allSummary;
  }
  toggleFav(){
    this.post.isFav = !this.post.isFav
  }

}
