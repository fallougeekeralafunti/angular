import { Component, OnInit } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BoatService } from 'app/boat/service/boat.service';

@Component({
  selector: 'app-delete-boat',
  templateUrl: './delete-boat.component.html',
  styleUrls: ['./delete-boat.component.css']
})
export class DeleteBoatComponent implements OnInit {
  users: any;
  constructor(private boatService: BoatService, public dialogRef: MatDialogRef<DeleteBoatComponent>) { }


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
