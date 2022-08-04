import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'alock-unlock-user',
  templateUrl: './lock-unlock-user.component.html',
  styleUrls: ['./lock-unlock-user.component.css']
})
export class LockUnlockUserComponent implements OnInit {

title !:string;
message !:string;
footer ="Confirm"

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<LockUnlockUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }
  

  ngOnInit() {
   this.affichage()
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
  affichage(){
    if(this.data.lock){
      this.title="Unlock User"
      this.message="confirm unclock"
    } else {
      this.title="Lock User"
      this.message="confirm clock"

    }
  }


}
