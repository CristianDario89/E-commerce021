
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PostService } from '../../../components/posts/post.service';
import { PostI } from '../../models/post-interface'; 
import { MatDialog } from '@angular/material/dialog';

import Swal from 'sweetalert2';
 
import { ModalComponent } from './../modal/modal.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit  {
  displayedColumns: string[] = ['titlePost','tagsPost','precio', 'actions'];
dataSource = new MatTableDataSource();

@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
@ViewChild(MatSort, { static: true }) sort: MatSort;

constructor(private postSvc: PostService, public dialog: MatDialog) { }

ngOnInit() {
  this.postSvc
    .getAllPosts()
    .subscribe(posts => (this.dataSource.data = posts));
}


applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}

onDeletePost(post: PostI) {
  Swal.fire({
    title: 'Estas seguro?',
    text: `No se podrá revertir esta acción!`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, Borrarlo!'
  }).then(result => {
    if (result.value) {
      this.postSvc.deletePostById(post).then(() => {
        Swal.fire('Borrado!', 'Su producto ha sido eliminado.', 'success');
      }).catch((error) => {
        Swal.fire('Error!', 'Ha habido un error en este producto', 'error');
      });
    }
  });

}
onEditPost(post: PostI) {
  this.openDialog(post);
}

onNewPost() {
  this.openDialog();
}

openDialog(post?: PostI): void {
  const config = {
    data: {
      message: post ? 'Edit Post' : 'New Post',
      content: post
    }
  };

  const dialogRef = this.dialog.open(ModalComponent, config);
  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result ${result}`);
  });
}

}


 