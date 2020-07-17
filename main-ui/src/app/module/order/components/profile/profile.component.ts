import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/core/model/user';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() userProfile: User;
  public role: string;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if(this.userProfile.IsAdmin == 'true') {
      this.role = "Admin";
    } else {
      this.role = "Non-Admin";
    }
  }

  public logOut = () => {
    localStorage.removeItem("User");
    this.router.navigate(["/login"]);
  }

}
