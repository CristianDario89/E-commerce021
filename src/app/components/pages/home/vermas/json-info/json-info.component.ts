import { Component, OnInit } from '@angular/core';
import { JsonInfoService } from './../../../../../shared/services/json-info.service';
@Component({
  selector: 'app-json-info',
  templateUrl: './json-info.component.html',
  styleUrls: ['./json-info.component.css'],
  providers:[JsonInfoService]
})
export class JsonInfoComponent implements OnInit {
  allUser: Object;
  isEdit=false;
  userObj={
    marca:'',
    precio:'',
    id:''
  }
  constructor(private commonService:JsonInfoService){}
ngOnInit(){
  this.getLatestUser();
}

  addUser(formObj){
    console.log(formObj)
    this.commonService.createUser(formObj).subscribe((response)=>{
      this.getLatestUser();
    })
  }
  getLatestUser(){
    this.commonService.getAllUser().subscribe((response)=>{
      this.allUser = response
    })
  }
  editUser(user){
    this.isEdit = true;
    this.userObj = user;
  }

  deleteUser(user){
    this.commonService.deleteUser(user).subscribe(()=>{
      this.getLatestUser();
    })
  }
  updateUser(){
    this.isEdit = !this.isEdit;
    this.commonService.updateUser(this.userObj).subscribe(()=>{
      this.getLatestUser();
    })
  }
}
