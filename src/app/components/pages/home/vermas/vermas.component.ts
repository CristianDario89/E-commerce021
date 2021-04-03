import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import {Location } from '@angular/common';

@Component({
  selector: 'app-vermas',
  templateUrl: './vermas.component.html',
  styleUrls: ['./vermas.component.css']
})
export class VermasComponent implements OnInit {
  selectedProduct:string;  
  products:any[]=[
    {code:'beb',producto:'Snacks'},
    {code:'gol',producto:'Saladas'},
    {code:'gal',producto:'Dulces'}
   
  ];
  choice(code){
    this.selectedProduct = code;
  }
  constructor(private location:Location,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  goBack():void{
    this.location.back();
  }

}
