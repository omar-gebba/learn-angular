import { Component, OnInit, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { BlogPost } from '../blog-post';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';
import { BlogDataService } from '../blog-data.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogPosts: BlogPost[][];
  currentPage:number;
  @ViewChildren('tile') blogPostTileComponents:QueryList<BlogPostTileComponent>;

  constructor(private blogDataService: BlogDataService) { }

  ngOnInit() 
  {
    this.currentPage = 0;

    this.blogPosts = this.blogDataService.getData();
  }

  updatePage(newPage)
  {
    this.currentPage = newPage;
  }

  expandAll()
  {
    this.blogPostTileComponents.forEach(e=>e.showAllSummary());
  }

}
