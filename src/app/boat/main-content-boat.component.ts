import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomeNotification } from 'app/layouts/custome-notification';
import { response } from 'express';
import { AddBoatComponent } from './component/add-boat/add-boat.component';
import { DeleteBoatComponent } from './component/delete-boat/delete-boat.component';
import { ViewBoatComponent } from './component/view-boat/view-boat.component';
// import { AddBoatComponent } from './component/add-boat/add';
// import { DeleteBoatComponent } from './component/delete-boat/delete-boat.component';
// import { EditBoatComponent } from './component/edit-boat/edit-boat.component';
// import { ViewBoatComponent } from './component/view-boat/view-boat.component';
import { BoatService } from './service/boat.service';


@Component({
  selector: 'app-main-content-boat',
  templateUrl: './main-content-boat.component.html',
  styleUrls: ['./main-content-boat.component.css']
})


export class MainContentBoatComponent implements OnInit {

  boats: any;
  Readmore = false;
  longText = `This is long paragraph text containing several words continued. An example of implementing dynamically limit long text`;

  constructor(
    private boatService: BoatService,
    private dialog: MatDialog,
    private notification: CustomeNotification
  ) { }



  ngOnInit() {
    this.getListBoats()
  }

  // -------------------------  Liste des Boats ------------------------
  getListBoats() {
    this.boatService.getBoats().subscribe(response => {
      this.boats = response;
      console.log(this.boats)
    })
  }
  

  openDialogAddBoat() {
    this.dialog.open(AddBoatComponent, {
     width: '800px'
    }).afterClosed().subscribe(res => {
      this.getListBoats()
      // this.notification.showNotification('success','bottom', 'right','Role add successfuly');
    });
  }

  openDialogDeleteBoat(idBoat) {
    this.dialog.open(DeleteBoatComponent, {
     width: '300px'
    
    }).afterClosed().subscribe(res => {
      if(res) {
        this.boatService.deleteBoat(idBoat).subscribe(response => {
          if(response.status) {
            this.getListBoats();
            this.notification.showNotification('success','bottom', 'right','Boat deleted successfuly');
          } else {
            this.notification.showNotification('warning','bottom', 'right','Error deleted unsuccessfuly');
          }
        });
      }
    });
  }

  openDialogEditBoat(boat) {
    this.dialog.open(AddBoatComponent, {
     width: '700px',
     data: boat
    }).afterClosed().subscribe(res => {
      if(res) {
        this.getListBoats();
        this.notification.showNotification('success','bottom', 'right','Boat edited successfuly');
      } else {
        this.notification.showNotification('warning','bottom', 'right','Error edit unsuccessfuly');
      }
    });
  }

  openDialogViewBoat(boat) {
    this.dialog.open(ViewBoatComponent, {
     width: '600px',
     data: boat
    });
  }

  

}

