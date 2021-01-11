import { Routes } from '@angular/router';

import { UsersComponent } from '../../pages/users/users.component';

export const ADMIN_ROUTES: Routes = [
    { path: 'users', component: UsersComponent },

    { path: '**', component: UsersComponent },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];
