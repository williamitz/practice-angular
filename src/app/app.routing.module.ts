import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const APP_ROUTES: Routes = [
    { path: '',
        pathMatch: 'full',
        component: AdminLayoutComponent,
        loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    },

    { path: 'admin',
    // pathMatch: 'full',
        component: AdminLayoutComponent,
        loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    },

];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
