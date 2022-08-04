import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-view-boat',
  templateUrl: './view-boat.component.html',
  styleUrls: ['./view-boat.component.css']
})
export class ViewBoatComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ViewBoatComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit() {
  }
  closeDialog(){
    this.dialogRef.close();
  }
}
