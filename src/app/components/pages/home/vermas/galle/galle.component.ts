import { Component, OnInit } from '@angular/core';
import { JsonInfoService } from './../../../../../shared/services/json-info.service';

@Component({
  selector: 'app-galle',
  templateUrl: './galle.component.html',
  styleUrls: ['./galle.component.css']
})
export class GalleComponent implements OnInit {
   
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
  this.commonService.createUser2(formObj).subscribe((response)=>{
    this.getLatestUser();
  })
}
getLatestUser(){
  this.commonService.getAllUser2().subscribe((response)=>{
    this.allUser = response
  })
}
editUser(user){
  this.isEdit = true;
  this.userObj = user;
}

deleteUser(user){
  this.commonService.deleteUser2(user).subscribe(()=>{
    this.getLatestUser();
  })
}
updateUser(){
  this.isEdit = !this.isEdit;
  this.commonService.updateUser2(this.userObj).subscribe(()=>{
    this.getLatestUser();
  })
}
  
}
