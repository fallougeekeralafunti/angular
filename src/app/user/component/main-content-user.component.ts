import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { LockUnlockUserComponent } from './lock-unlock-user/lock-unlock-user.component';
import { CustomeNotification } from 'app/layouts/custome-notification';
import { ViewUserComponent } from './view-user/view-user.component';


@Component({
  selector: 'main-content-content-user',
  templateUrl: './main-content-user.component.html',
  styleUrls: ['./main-content-user.component.css']
})
export class MainContentUserComponent implements OnInit {
  users: any;
  lock = false;
  constructor(private userService: UserService,
    private dialog: MatDialog,
    private notification: CustomeNotification) { }
  


  ngOnInit() {
    this.getListUsers()
  }

  // -------------------------  Liste des commandes ------------------------
  getListUsers(){
    this.userService.getListUsers().subscribe( response => {
        this.users = response;
        console.log(this.users)
    })
}

openDialogViewUser(user) {
  this.dialog.open(ViewUserComponent, {
   width: '600px',
   data: user
  });
}

openDialogAddUser() {
  this.dialog.open(AddUserComponent, {
    data: {
      dataKey: "yourData"
    }
   
  }).afterClosed().subscribe(res => {
    this.getListUsers()
  });
}
openDialogUpdateUser(dataUpdate) {
  console.log(dataUpdate)
  this.dialog.open(UpdateUserComponent, {
    data: dataUpdate
  });

}

openDialogLockUser(idUser) {
  this.dialog.open(LockUnlockUserComponent, {
    data: {lock: false}
   
  }).afterClosed().subscribe(res => {
    if(res) {
      this.userService.lockUser(idUser).subscribe(response => {
        if(response.status) {
          this.getListUsers();
          this.notification.showNotification('success','bottom', 'right','User lock successfuly');
        } else {
          this.notification.showNotification('warning','bottom', 'right','Error lock unsuccessfuly');
        }
      });
    }
  });
}
openDialogUnLockUser(idUser) {
  this.dialog.open(LockUnlockUserComponent, {
    width: '300px',
    data: {lock: true}
  }).afterClosed().subscribe(res => {
    if(res) {
      this.userService.unLockUser(idUser).subscribe(response => {
        if(response.status) {
          this.getListUsers();
          this.notification.showNotification('success','bottom', 'right','User unlock successfuly');
        } else {
          this.notification.showNotification('warning','bottom', 'right','Error unlock unsuccessfuly');
        }
      });
    }
  });
}
openDialogDeleteUser(idUser) {
  this.dialog.open(DeleteUserComponent, {
   width: '300px'
  
  }).afterClosed().subscribe(res => {
    if(res) {
      this.userService.deleteUser(idUser).subscribe(response => {
        if(response.status) {
          this.getListUsers();
          this.notification.showNotification('success','bottom', 'right','User deleted successfuly');
        } else {
          this.notification.showNotification('warning','bottom', 'right','Error deleted unsuccessfuly');
        }
      });
    }
  });
}


}
