import { Component, Inject, OnInit } from '@angular/core';
import { RoleService } from '../../service/role.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.css']
})
export class EditRoleComponent implements OnInit {

  roleForm!: FormGroup;

  constructor(private roleService: RoleService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditRoleComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }


  ngOnInit() {
    this.initForm();
  }


  // -------------------------  Reset Form ------------------------

  onReset() { this.roleForm.reset() }

  // -------------------------  Initial Form ------------------------

  initForm() {
    this.roleForm = this.formBuilder.group({
      rol_id: [this.data.rol_id, Validators.required],
      rol_name: [this.data.rol_name, Validators.required],
      rol_description: [this.data.rol_description, Validators.required]
    })
  }

  // -------------------------  Submit Form ------------------------

  onSubmitForm(): void {
    this.roleService.updateRole(this.roleForm.value).subscribe( res =>{
        this.closeDialog(res.status);
    });

  }
   
  closeDialog(status){
    this.dialogRef.close(status);
  }

}
