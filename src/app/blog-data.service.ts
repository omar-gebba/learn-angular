import { Injectable } from '@angular/core';
import { BlogPost } from './blog-post';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  constructor() { }

  getData(): BlogPost[][] {
    return [
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
}
