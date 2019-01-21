import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../../services/admin.service'
import { AdmincontrolService } from '../../services/admincontrol.service'
import { AlertService } from '../../services/alert.service';
import { User } from '../../models/user';
import { Event } from '../../models/event';
@Component({
  selector: 'app-admincontrol',
  templateUrl: './admincontrol.component.html',
  styleUrls: ['./admincontrol.component.css']
})
export class AdmincontrolComponent implements OnInit {
  user: any = [];
  users: User[];
  loading = false;
  error = '';
  event: any = [];
  events: Event[];


  constructor(private alertService: AlertService, private router: Router, private adminService: AdminService, private admincontrolService: AdmincontrolService, private route: ActivatedRoute, ) { }

  logout() {
    this.adminService.logout();
    this.router.navigate(['/admin']);
  }
  ngOnInit() {
    this.getAll();
    this.getAllevent();
  }

  getAll() {
    this.user = [];
    this.admincontrolService.getAll(this.user.id)
      .subscribe((data: any) => {
        console.log(data);
        this.user = data;
      },
        error => {
          this.alertService.error(error);
          this.loading = false;

        });
  }

  getAllevent() {
    this.event = [];
    this.admincontrolService.getAllevent(this.event.id)
      .subscribe((data: any) => {
        console.log(data);
        this.event = data;
      },
        error => {
          this.alertService.error(error);
          this.loading = false;

        });
  }

  delete(user: User): void {
    this.admincontrolService.deleteUser(user).subscribe(
      res => {
        this.getAll();
      }, (err) => {
        console.log(err);
      }
    );
  }

  deleteEvent(event: Event): void {

    this.admincontrolService.deleteEvent(event).subscribe(
      res => {
        this.getAllevent();
      }, (err) => {
        console.log(err);
      }
    );
  }
};