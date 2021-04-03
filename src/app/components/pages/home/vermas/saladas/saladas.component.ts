import { Component, OnInit } from '@angular/core';
import { JsonInfoService } from './../../../../../shared/services/json-info.service';

@Component({
  selector: 'app-saladas',
  templateUrl: './saladas.component.html',
  styleUrls: ['./saladas.component.css']
})
export class SaladasComponent implements OnInit {

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
    this.commonService.createUserSal(formObj).subscribe((response)=>{
      this.getLatestUser();
    })
  }
  getLatestUser(){
    this.commonService.getAllUserSal().subscribe((response)=>{
      this.allUser = response
    })
  }
  editUser(user){
    this.isEdit = true;
    this.userObj = user;
  }

  deleteUser(user){
    this.commonService.deleteUserSal(user).subscribe(()=>{
      this.getLatestUser();
    })
  }
  updateUser(){
    this.isEdit = !this.isEdit;
    this.commonService.updateUserSal(this.userObj).subscribe(()=>{
      this.getLatestUser();
    })
  }

}
