import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TableListComponent } from 'app/table-list/table-list.component';
import { Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-main-content-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  users: any;
  roles: any;
  selectedRole: any
  userForm!: FormGroup;
  selected = 'option1';
  constructor(private userService: UserService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<UpdateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.initForm();
    this.getListRoles();
    this.selectedRole = this.data.role;
    alert(JSON.stringify(this.selectedRole));
  }

  getListRoles() {
    this.userService.getListRoles().subscribe(response => {
      this.roles = response;
    })
  }
  // // -------------------------  Liste des commandes ------------------------
  // getListUsers() {
  //   this.userService.getListUsers().subscribe(response => {
  //     this.users = response;
  //     alert(this.users)
  //   })
  // }

  initForm() {
    this.userForm = this.formBuilder.group({
      usr_firstName: [this.data?.usr_firstName, Validators.required],
      usr_lastName: [this.data?.usr_lastName, Validators.required],
      usr_phone: [this.data?.usr_phone, Validators.required],
      usr_email: [this.data?.usr_email, [Validators.required, Validators.email]],
      usr_address: [this.data?.usr_address, Validators.required],
      usr_birth: [this.data?.usr_birth, Validators.required],
      roleRolId: [this.data.role.rol_id, Validators.required],
    });
  }

  compareFn(r1, r2): boolean { return r1 && r2 && r1.rol_Id === r2.rol_Id; }

  // -------------------------  Submit Form ------------------------

  onSubmitForm(): void {
    this.userService.createUser(this.userForm.value).subscribe(res => {
      if (res.status) {
        this.closeDialog()
      }
      error: (e) => console.error(e)
    });

  }

  closeDialog() {
    this.dialogRef.close();
  }


}
