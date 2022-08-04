import { Component, Inject, OnInit } from '@angular/core';
import { RoleService } from '../../service/role.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'view-role',
  templateUrl: './view-role.component.html',
  styleUrls: ['./view-role.component.css']
})
export class ViewRoleComponent implements OnInit {

  constructor(private roleService: RoleService,
    public dialogRef: MatDialogRef<ViewRoleComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }


  ngOnInit() {
  }



   
  closeDialog(){
    this.dialogRef.close();
  }

}
