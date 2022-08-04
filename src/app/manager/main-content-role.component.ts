import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomeNotification } from 'app/layouts/custome-notification';
import { response } from 'express';
import { AddRoleComponent } from './component/add-role/add-role.component';
import { DeleteRoleComponent } from './component/delete-role/delete-role.component';
import { EditRoleComponent } from './component/edit-role/edit-role.component';
import { ViewRoleComponent } from './component/view-role/view-role.component';
import { RoleService } from './service/role.service';

@Component({
  selector: 'app-main-content-role',
  templateUrl: './main-content-role.component.html',
  styleUrls: ['./main-content-role.component.css']
})
export class MainContentRoleComponent implements OnInit {
  roles: any;
  constructor(
    private roleService: RoleService,
    private dialog: MatDialog,
    private notification: CustomeNotification
  ) { }

  ngOnInit() {
    this.getListRoles()
  }

  // -------------------------  Liste des Roles ------------------------
  getListRoles() {
    this.roleService.getRoles().subscribe(response => {
      this.roles = response;
    })
  }

  openDialogAddRole() {
    this.dialog.open(AddRoleComponent, {
     width: '600px'
    }).afterClosed().subscribe(res => {
      
      this.getListRoles()
      
    });
  }

  openDialogDeleteRole(idRole) {
    this.dialog.open(DeleteRoleComponent, {
     width: '300px'
    
    }).afterClosed().subscribe(res => {
      if(res) {
        this.roleService.deleteRole(idRole).subscribe(response => {
          if(response.status) {
            this.getListRoles();
            this.notification.showNotification('success','bottom', 'right','Role deleted successfuly');
          } else {
            this.notification.showNotification('warning','bottom', 'right','Error deleted unsuccessfuly');
          }
        });
      }
    });
  }

  openDialogEditRole(role) {
    this.dialog.open(EditRoleComponent, {
     width: '600px',
     data: role
    }).afterClosed().subscribe(res => {
      if(res) {
        this.getListRoles();
        this.notification.showNotification('success','bottom', 'right','Role edited successfuly');
      } else {
        this.notification.showNotification('warning','bottom', 'right','Error edit unsuccessfuly');
      }
    });
  }

  openDialogViewRole(role) {
    this.dialog.open(ViewRoleComponent, {
     width: '600px',
     data: role
    });
  }


}
