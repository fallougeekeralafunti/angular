import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomeNotification } from 'app/layouts/custome-notification';
import { response } from 'express';
import { AddCategoryComponent } from './component/add-category/add-category.component';
import { DeleteCategoryComponent } from './component/delete-category/delete-category.component';
import { EditCategoryComponent } from './component/edit-category/edit-category.component';
import { ViewCategoryComponent } from './component/view-category/view-category.component';
import { CategoryService } from './service/category.service';


@Component({
  selector: 'app-main-content-category',
  templateUrl: './main-content-category.component.html',
  styleUrls: ['./main-content-category.component.css']
})
export class MainContentCategoryComponent implements OnInit {
  categorys: any;
  constructor(
    private categoryService: CategoryService,
    private dialog: MatDialog,
    private notification: CustomeNotification
  ) { }

  ngOnInit() {
    this.getListCategorys()
  }

  // -------------------------  Liste des Categorys ------------------------
  getListCategorys() {
    this.categoryService.getCategorys().subscribe(response => {
      this.categorys = response;
    })
  }

  openDialogAddCategory() {
    this.dialog.open(AddCategoryComponent, {
     width: '600px'
    }).afterClosed().subscribe(res => {
      
      this.getListCategorys()
      
    });
  }

  openDialogDeleteCategory(idCategory) {
    this.dialog.open(DeleteCategoryComponent, {
     width: '300px'
    
    }).afterClosed().subscribe(res => {
      if(res) {
        this.categoryService.deleteCategory(idCategory).subscribe(response => {
          if(response.status) {
            this.getListCategorys();
            this.notification.showNotification('success','bottom', 'right','Category deleted successfuly');
          } else {
            this.notification.showNotification('warning','bottom', 'right','Error deleted unsuccessfuly');
          }
        });
      }
    });
  }

  openDialogEditCategory(category) {
    this.dialog.open(EditCategoryComponent, {
     width: '600px',
     data: category
    }).afterClosed().subscribe(res => {
      if(res) {
        this.getListCategorys();
        this.notification.showNotification('success','bottom', 'right','Category edited successfuly');
      } else {
        this.notification.showNotification('warning','bottom', 'right','Error edit unsuccessfuly');
      }
    });
  }

  openDialogViewCategory(category) {
    this.dialog.open(ViewCategoryComponent, {
     width: '600px',
     data: category
    });
  }


}
