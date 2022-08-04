import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoleRoutes } from './role.routing';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { MainContentRoleComponent } from './main-content-role.component';
import { AddRoleComponent } from './component/add-role/add-role.component';
import { DeleteRoleComponent } from './component/delete-role/delete-role.component';
import { EditRoleComponent } from './component/edit-role/edit-role.component';
import { ViewRoleComponent } from './component/view-role/view-role.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(RoleRoutes),
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
    MainContentRoleComponent,
    AddRoleComponent,
    DeleteRoleComponent,
    EditRoleComponent,
    ViewRoleComponent
  ]
})

export class RoleModule {}