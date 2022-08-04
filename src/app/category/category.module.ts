import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { MainContentCategoryComponent } from './main-content-category.component';
import { AddCategoryComponent } from './component/add-category/add-category.component';
import { DeleteCategoryComponent } from './component/delete-category/delete-category.component';
import { EditCategoryComponent } from './component/edit-category/edit-category.component';
import { ViewCategoryComponent } from './component/view-category/view-category.component';
import { CategoryRoutes } from './category.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CategoryRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule
  ],
  declarations: [
    MainContentCategoryComponent,
    AddCategoryComponent,
    DeleteCategoryComponent,
    EditCategoryComponent,
    ViewCategoryComponent
  ]
})

export class CategoryModule {}