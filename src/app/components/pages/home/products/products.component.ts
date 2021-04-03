import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  imageObject: Array<object> = [{
    image: 'assets/img/productsAll/3.png',
    thumbImage: 'assets/img/productsAll/3.png',
    alt: 'alt of image',
    title: 'Almacén'
}, {
    image: 'assets/img/productsAll/2.jpg', // Support base64 image
    thumbImage: 'assets/img/productsAll/2.jpg', // Support base64 image
    title: 'Galletitas', //Optional: You can use this key if want to show image with title
    alt: 'Galletitas' //Optional: You can use this key if want to show image with alt
},
{
  image: 'assets/img/productsAll/1.jpg',
  thumbImage: 'assets/img/productsAll/1.jpg',
  alt: 'alt of image',
  title: 'Golosinas'
}, {
  image: 'assets/img/productsAll/4.jpg', // Support base64 image
  thumbImage: 'assets/img/productsAll/4.jpg', // Support base64 image
  title: 'Bebidas', //Optional: You can use this key if want to show image with title
  alt: 'Bebidas' //Optional: You can use this key if want to show image with alt
},
{
  image: 'assets/img/productsAll/5.jpeg',
  thumbImage: 'assets/img/productsAll/5.jpeg',
  alt: 'alt of image',
  title: 'Limpieza'
}, {
  image: 'assets/img/productsAll/6.png', // Support base64 image
  thumbImage: 'assets/img/productsAll/6.png', // Support base64 image
  title: 'Helados', //Optional: You can use this key if want to show image with title
  alt: 'Helados' //Optional: You can use this key if want to show image with alt
}
];

  constructor() { }

  ngOnInit(): void {
  }

}
