import { Component, OnInit } from '@angular/core';
import { PostService } from './../../posts/post.service';
import { Observable } from 'rxjs';
import { PostI } from '../../../shared/models/post-interface';
@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})
export class TablasComponent implements OnInit {
  selectedProduct:string;  
  products:any[]=[
    {code:'beb',producto:'bebidas'},
    {code:'gol',producto:'golosinas'},
    {code:'gal',producto:'galletitas'},
    {code:'hel',producto:'helados'},
    {code:'lim',producto:'limpieza'}
  ];
  choice(code){
    this.selectedProduct = code;
  }
  
  public posts$: Observable<PostI[]>;
  
  constructor(private postSvc: PostService) { }
  
  ngOnInit() {
    this.posts$ = this.postSvc.getAllPosts();
  }
}
