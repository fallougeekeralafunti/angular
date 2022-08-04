import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-main-content-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  users: any;
  constructor(private userService: UserService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<DeleteUserComponent>) { }



  ngOnInit() {
  }

  // -------------------------  Liste des commandes ------------------------
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



