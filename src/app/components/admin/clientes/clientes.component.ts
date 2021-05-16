import { Component, OnInit } from '@angular/core';
import { JsonInfoService } from './../../../shared/services/json-info.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  providers:[JsonInfoService]
})
export class ClientesComponent implements OnInit {

  allUser: Object;
  isEdit=false;
  userObj={
    id:'',
    nombre:'',
    direccion:'',
    telefono:''
  }
  constructor(private commonService:JsonInfoService){}
ngOnInit(){
  this.getLatestUser();
}

  addUser(formObj){
    console.log(formObj)
    this.commonService.createUserClientes(formObj).subscribe((response)=>{
      this.getLatestUser();
    })
  }
  getLatestUser(){
    this.commonService.getAllUserClientes().subscribe((response)=>{
      this.allUser = response
    })
  }
  editUser(user){
    this.isEdit = true;
    this.userObj = user;
  }

  deleteUser(user){
    this.commonService.deleteUserClientes(user).subscribe(()=>{
      this.getLatestUser();
    })
  }
  updateUser(){
    this.isEdit = !this.isEdit;
    this.commonService.updateUserClientes(this.userObj).subscribe(()=>{
      this.getLatestUser();
    })
  }

}
