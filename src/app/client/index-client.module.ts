import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { IndexClientRoutes } from './index-client.routing';
import { IndexClientComponent } from './index-client/index-client.component';
import {MatMenuModule} from '@angular/material/menu';
import { BarMenuComponent } from './bar-menu/bar-menu.component';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(IndexClientRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatInputModule,
    MatMenuModule,
    MatCardModule

  ],
  declarations: [
    IndexClientComponent,
    BarMenuComponent
  ]
})

export class IndexClientModule { }