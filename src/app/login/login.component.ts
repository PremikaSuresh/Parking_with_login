﻿import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import { FormControl } from '@angular/forms';
import { TasksService } from '../tasks.service';
import {Http, Headers} from '@angular/http';

// import { AlertService, AuthenticationService } from '../_services/index';

@Component({
    selector: 'login-nav',
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent  {

    login() {
        this.router.navigate(['generate-parking']);
        console.log("User logged in");
    }
    // model: any = {};
    // loading = false;
    // userPasswd: string;
    // returnUrl: string;

    constructor(
        private tasksService:TasksService,
        private route: ActivatedRoute,
        private router: Router) { }

    // ngOnInit() {
    //     // reset login status
    //     // this.authenticationService.logout();

    //     // get return url from route parameters or default to '/'
    //     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    // }

    // login() {
    //     this.loading = true;
    //     console.log("Loggin in", this.model.username + ", passs:" + this.model.password);
    //     this.tasksService.getUser(this.model.username).subscribe(user => {
    //         console.log(Object.keys(user).length);
    //         // console.log(user[0].login.password);
    //         if(Object.keys(user).length != 0){
    //         this.userPasswd = user[0].login.password;
    //         if(this.userPasswd == this.model.password){
    //             console.log('login succcessful');
    //             localStorage.setItem('currentUserFN', user[0].first_name);
    //             localStorage.setItem('currentUserLN', user[0].last_name);
    //             localStorage.setItem('userId',this.model.username);
    //             this.router.navigate(['pool']);
    //         }
    //         else{
    //             this.loading = false;
    //             console.log('invalid username or password');
    //             this.router.navigate(['login']);
    //         }
    //     } else{
    //         this.loading = false;
    //         console.log("User doesn't exist. Click register for sign up")
    //     }
    //     });
    // }
}
