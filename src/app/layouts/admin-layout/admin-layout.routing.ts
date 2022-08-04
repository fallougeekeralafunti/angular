import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ManagerComponent } from 'app/manager/component/manager.component';
import { MainContentUserComponent } from 'app/user/component/main-content-user.component';
import { MainContentRoleComponent } from 'app/manager/main-content-role.component';
// import { MainContentMovieComponent } from 'app/movie/main-content-movie.component';
import { MainContentCategoryComponent } from 'app/category/main-content-category.component';
import { MainContentBoatComponent } from 'app/boat/main-content-boat.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'manager',        component: ManagerComponent },
    { path: 'user',           component: MainContentUserComponent },
    { path: 'role', component: MainContentRoleComponent,
        children: [{
          path: '',
          loadChildren: () => import('../../manager/role.module').then(m => m.RoleModule)
        }]
    },
    { path: 'category', component: MainContentCategoryComponent,
        children: [{
          path: '',
          loadChildren: () => import('../../category/category.module').then(m => m.CategoryModule)
        }]
    },
    { path: 'boat', component: MainContentBoatComponent,
        children: [{
          path: '',
          loadChildren: () => import('../../boat/boat.module').then(m => m.BoatModule)
        }]
    }
];
