import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostI } from '../../../shared/models/post-interface';
import { PostService } from '../post.service';
@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  private image: any;
  constructor(private postSvc: PostService) { }

  public newPostForm = new FormGroup({
    titlePost: new FormControl('', Validators.required),
    contentPost: new FormControl('', Validators.required),
    tagsPost: new FormControl('', Validators.required),
    imagePost: new FormControl('', Validators.required),
    marca: new FormControl('', Validators.required),
    observacion: new FormControl('', Validators.required),
    precio: new FormControl('', Validators.required),
  });
  ngOnInit(): void {
  }

  addNewPost(data: PostI) {
    this.postSvc.preAddAndUpdatePost(data, this.image);
  }

  handleImage(event: any): void {
    this.image = event.target.files[0];
  }
}
