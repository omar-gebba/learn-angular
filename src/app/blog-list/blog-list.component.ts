import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { BlogPost } from '../blog-post';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogPosts: BlogPost[][];
  currentPage:number =  0;
  @ViewChild('#tile') blogPostTileComponent:BlogPostTileComponent;

  constructor() { }

  ngOnInit() 
  {
    this.blogPosts=
    [
      [
        {title: 'post 1', summary: 'Summary 1 Formal framework'},
        {title: 'post 2', summary: 'Summary 1 Formal framework'},
        {title: 'post 3', summary: 'Summary 1 Formal framework'},
        {title: 'post 4', summary: 'Summary 1 Formal framework'}
      ],
      [
        {title: 'post 5', summary: 'Summary 1 Formal framework'},
        {title: 'post 6', summary: 'Summary 1 Formal framework'},
        {title: 'post 7', summary: 'Summary 1 Formal framework'},
        {title: 'post 8', summary: 'Summary 1 Formal framework'}
      ],
      [
        {title: 'post 9 ', summary: 'Summary 1 Formal framework'},
        {title: 'post 10', summary: 'Summary 1 Formal framework'},
        {title: 'post 11', summary: 'Summary 1 Formal framework'},
        {title: 'post 12', summary: 'Summary 1 Formal framework'}
      ],
    ]
  }

  updatePage(newPage)
  {
    this.currentPage = newPage;
  }

  expandAll()
  {
    this.blogPostTileComponent.showAllSummary();
  }

}
