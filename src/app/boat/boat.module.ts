import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoatRoutes } from './boat.routing';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { MainContentBoatComponent } from './main-content-boat.component';
import { AddBoatComponent } from './component/add-boat/add-boat.component';
import { DeleteBoatComponent } from './component/delete-boat/delete-boat.component';
import { EditBoatComponent } from './component/edit-boat/edit-boat.component';
// import { ViewBoatComponent } from './component/view-boat/view-boat.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ImageCropperComponent } from './component/image-cropper/image-cropper.component';
import { ViewBoatComponent } from './component/view-boat/view-boat.component';
// import { ImageCropperComponent } from './component/image-cropper/image-cropper.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BoatRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    ImageCropperModule
  ],
  declarations: [
    MainContentBoatComponent,
    AddBoatComponent,
    DeleteBoatComponent,
    EditBoatComponent,
    ViewBoatComponent,
    ImageCropperComponent
  ]
})

export class BoatModule {}