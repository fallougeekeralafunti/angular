import { Routes, RouterModule } from '@angular/router';
import * as path from 'path';
import { IndexClientComponent } from './index-client/index-client.component';

export const IndexClientRoutes: Routes = [
  {
    path: 'index-client', children: [
      { path: '', component: IndexClientComponent }
    ]
  }
];
