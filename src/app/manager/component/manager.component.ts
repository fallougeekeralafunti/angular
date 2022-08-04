import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../service/manager.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  managers: any;
  constructor(private managerService: ManagerService,) { }

  ngOnInit() {
    this.getListManager()
  }

  // -------------------------  Liste des commandes ------------------------
  getListManager(){
    this.managerService.getManagers().subscribe( response => {
        this.managers = response;
    })
}


}
