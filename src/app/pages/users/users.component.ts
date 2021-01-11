import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../interfaces/user.interface';
import swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  getSbc: Subscription;

  dataUser: IUser[] = [];
  loading = false;

  constructor( private usersSvc: UsersService ) { }

  ngOnInit(): void {
    this.onGetList();
  }

  onGetList() {
    this.loading = true;
    swal.showLoading();
    this.getSbc = this.usersSvc.getUsers()
    .pipe( map( (res: any) => {

      let arrAux: IUser[] = [];
      for (const iterator of res) {

        arrAux.push({
          id: iterator.id,
          name: iterator.name,
          email: iterator.email
        });
      }

      return arrAux;
    }) )
    .subscribe( (res: any) => {

      this.dataUser = res;
      swal.close();
      this.loading = false;
    });
  }

  ngOnDestroy() {
    this.getSbc.unsubscribe();
  }

}
