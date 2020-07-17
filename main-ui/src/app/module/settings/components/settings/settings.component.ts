import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from 'src/app/core/model/user';
import { SettingsService } from 'src/app/core/services/settings.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
 public userList: User[] = [];
 public userForm: FormGroup;
 public user: User = new User();
 public showModel: boolean = true;
 @ViewChild("completeModal",{static:false}) model: ElementRef; 

 @ViewChild('completeModal', {static: false}) completeModal: ElementRef;
  constructor(
    private settingsService: SettingsService,
    private router: Router,
    public formBuilder: FormBuilder,
  ) {
      this.userForm = formBuilder.group({
        UserId: new FormControl('', Validators.required),
        username: new FormControl('', Validators.required),
        Email: new FormControl('', Validators.required),
        Password: new FormControl('', Validators.required),
        IsAdmin: new FormControl('', Validators.required)
      });
   }

  ngOnInit() {
     this.settingsService.getUsers().subscribe(
       (response: User[]) => {
           this.userList = response;
           console.log(this.userList);
     });
  }

  public addUser = () => {
    this.user.UserId = this.userForm.controls.UserId.value;
    this.user.UserName = this.userForm.controls.username.value;
    this.user.Email = this.userForm.controls.Email.value;
    this.user.Password = this.userForm.controls.Password.value;
    this.user.IsAdmin = this.userForm.controls.IsAdmin.value;
    console.log(this.user);
    this.settingsService.AddUser(this.user).subscribe((res: any) => {
        this.showModel = true;
        window.location.reload();
        this.router.routeReuseStrategy.shouldReuseRoute = ()  => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(["/settings"]);
    });
  }

  public showModelPopup() {
    this.showModel = true;
  }
}
