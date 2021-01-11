import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ADMIN_ROUTES } from './admin-layout.routes';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from 'src/app/pages/users/users.component';

@NgModule({
    declarations: [
        UsersComponent
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        RouterModule.forChild( ADMIN_ROUTES )
     ],
    exports: [],
    providers: [],
})
export class AdminLayoutModule {}