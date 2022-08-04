import { Routes, RouterModule } from '@angular/router';
import * as path from 'path';
import { AddBoatComponent } from './component/add-boat/add-boat.component';
import { EditBoatComponent } from './component/edit-boat/edit-boat.component';
import { ViewBoatComponent } from './component/view-boat/view-boat.component';
import { MainContentBoatComponent } from './main-content-boat.component';

export const BoatRoutes: Routes = [
  {
    path: 'boat', children: [
      { path: '', component: MainContentBoatComponent },
      { path: 'add', component: AddBoatComponent },
      { path: 'edit', component: EditBoatComponent },
      { path: 'view', component: ViewBoatComponent }
    ]
  }
];
