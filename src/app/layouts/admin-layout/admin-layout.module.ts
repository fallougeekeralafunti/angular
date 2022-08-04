import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { ManagerComponent } from 'app/manager/component/manager.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MainContentUserComponent } from 'app/user/component/main-content-user.component';
import { AddUserComponent } from 'app/user/component/add-user/add-user.component';
import { DeleteUserComponent } from 'app/user/component/delete-user/delete-user.component';
import { UpdateUserComponent } from 'app/user/component/update-user/update-user.component';
import { RoleModule } from 'app/manager/role.module';
import { MainContentRoleComponent } from 'app/manager/main-content-role.component';
// import { MovieModule } from 'app/movie/movie.module';
import { ViewUserComponent } from 'app/user/component/view-user/view-user.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    RoleModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    ManagerComponent,
    MainContentUserComponent,
    AddUserComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    ViewUserComponent
  ]
})

export class AdminLayoutModule {}
