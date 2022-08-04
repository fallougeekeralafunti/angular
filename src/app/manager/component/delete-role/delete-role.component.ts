import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../service/role.service';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TableListComponent } from 'app/table-list/table-list.component';

@Component({
  selector: 'app-delete-role',
  templateUrl: './delete-role.component.html',
  styleUrls: ['./delete-role.component.css']
})
export class DeleteRoleComponent implements OnInit {
  users: any;
  constructor(private roleService: RoleService, public dialogRef: MatDialogRef<DeleteRoleComponent>) { }


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
