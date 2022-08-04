import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TableListComponent } from 'app/table-list/table-list.component';
import { CategoryService } from '../../service/category.service';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent implements OnInit {
  users: any;
  constructor(private categoryService: CategoryService, public dialogRef: MatDialogRef<DeleteCategoryComponent>) { }


  ngOnInit() {
  }

  // -------------------------  Submit Form ------------------------

  onDelete(){
    this.closeDialog(true);
  }

  onClose(){
    this.closeDialog(false);
  }
   
  closeDialog(state){
    this.dialogRef.close(state);
  }

}
