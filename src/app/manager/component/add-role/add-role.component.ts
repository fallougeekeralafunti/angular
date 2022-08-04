import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../service/role.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomeNotification } from 'app/layouts/custome-notification';

@Component({
  selector: 'add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  roleForm!: FormGroup;

  constructor(private roleService: RoleService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddRoleComponent>,
    private notification: CustomeNotification
  ) { }


  ngOnInit() {
    this.initForm();
  }


  // -------------------------  Reset Form ------------------------

  onReset() { this.roleForm.reset() }

  // -------------------------  Initial Form ------------------------

  initForm() {
    this.roleForm = this.formBuilder.group({
      rol_name: ['', Validators.required],
      rol_description: ['', Validators.required]

    })
  }

  // -------------------------  Submit Form ------------------------

  onSubmitForm(): void {
    this.roleService.createRole(this.roleForm.value).subscribe( res =>{
       if(res.status){
      this.notification.showNotification('success','bottom', 'right','Role add successfuly');
        this.closeDialog()
       }
        
      error: (e) => console.error(e)
    });

  }
   
  closeDialog(){
    this.dialogRef.close();
  }

}
