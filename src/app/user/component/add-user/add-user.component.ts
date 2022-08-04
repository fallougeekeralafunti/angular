import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TableListComponent } from 'app/table-list/table-list.component';
// import {MD_DIALOG_DATA} from '@angular/material';
import { Inject } from '@angular/core';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  roles: any;
  userForm!: FormGroup;
  newUser: any;

  constructor(private userService: UserService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  openDialog() {
    this.dialog.open(TableListComponent, {
      // data: {
      //   animal: 'panda',
      // },
    });
  }


  ngOnInit() {
    this.getLisRoles()
    this.initForm();
    console.log(this.data)
  }

  // -------------------------  Liste des Roles ------------------------
  getLisRoles() {
    this.userService.getListRoles().subscribe(response => {
      this.roles = response;
      console.log(this.roles)
    })
  }
  // -------------------------  Reset Form ------------------------

  onReset() { this.userForm.reset() }

  // -------------------------  Initial Form ------------------------

  initForm() {
    this.userForm = this.formBuilder.group({
      usr_firstName: ['', Validators.required],
      usr_lastName: ['', Validators.required],
      usr_phone: ['', Validators.required],
      usr_email: ['', [Validators.required, Validators.email]],
      usr_address: ['', Validators.required],
      usr_birth: ['', Validators.required],
      roleRolId: ['', Validators.required],

    })
  }

  // -------------------------  Submit Form ------------------------

  onSubmitForm(): void {
    // const formValue = this.userForm.value;
    // this.newUser = [
    //   formValue['firstName'],
    //   formValue['lastName'],
    //   formValue['phone'],
    //   formValue['email'],
    //   formValue['address'],
    //   formValue['birth'],
    //   formValue['role'],
    // ];
    // alert(JSON.stringify(this.userForm.value))
    this.userService.createUser(this.userForm.value).subscribe( res =>{
       if(res.status){
        this.closeDialog()
       }
        
      error: (e) => console.error(e)
    });

  }
   
  closeDialog(){
    this.dialogRef.close();
  }

}
