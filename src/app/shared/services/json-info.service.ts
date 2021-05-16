import { Injectable } from '@angular/core'; 
import { HttpClient} from '@angular/common/http';

@Injectable()
export class JsonInfoService {

  constructor(private _http:HttpClient) { }

  createUser(products){
     return this._http.post("http://localhost:3000/products", products);
  }
  getAllUser(){
    return this._http.get("http://localhost:3000/products")
  }
  updateUser(products){
    return this._http.put("http://localhost:3000/products/" +products.id, products)
  }
  deleteUser(products){
    return this._http.delete("http://localhost:3000/products/" +products.id)
  }

  createUser2(products){
    return this._http.post("http://localhost:3000/snacks", products);
 }
 getAllUser2(){
   return this._http.get("http://localhost:3000/snacks")
 }
 updateUser2(products){
   return this._http.put("http://localhost:3000/snacks/" +products.id, products)
 }
 deleteUser2(products){
   return this._http.delete("http://localhost:3000/snacks/" +products.id)
 }

 createUserSal(products){
  return this._http.post("http://localhost:3000/saladas", products);
}
getAllUserSal(){
 return this._http.get("http://localhost:3000/saladas")
}
updateUserSal(products){
 return this._http.put("http://localhost:3000/saladas/" +products.id, products)
}
deleteUserSal(products){
 return this._http.delete("http://localhost:3000/saladas/" +products.id)
}


createUserClientes(products){
  return this._http.post("http://localhost:3000/clientes", products);
}
getAllUserClientes(){
 return this._http.get("http://localhost:3000/clientes")
}
updateUserClientes(products){
 return this._http.put("http://localhost:3000/clientes/" +products.id, products)
}
deleteUserClientes(products){
 return this._http.delete("http://localhost:3000/clientes/" +products.id)
}
}
