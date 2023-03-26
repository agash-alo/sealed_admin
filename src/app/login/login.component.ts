import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from '../../environments/environment';

import * as CryptoJS from 'crypto-js';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form: any = FormGroup;
  public temppassform: any = FormGroup;
  isLoading = false;
  Loading = false;
  error_message = '';
  isTempPassChange = false;
  userObj: any;
  loginend: any;
  popups: boolean = false;
  roles: any = [];

  constructor(
    private router: Router,
    private apiService: ApiServiceService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    public spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
    this.temppassform = this.fb.group({
      newpassword: ['', Validators.compose([Validators.required])],
    });
  }

  async userLoginAuth() {}

  async loginAuth() {
    console.log(this.form.value);
    this.apiService.LoginIn(this.form.value).subscribe(
      (res) => {
        console.log(res);
        if (res.code == 200) {
          let userInfo = res.data.data;
          localStorage.setItem('userInfoA', JSON.stringify(userInfo));

          let token = res.data.token;
          sessionStorage.setItem('tokenA', token);
          localStorage.setItem('useridA', JSON.stringify(userInfo.userId));
          this.router.navigate(['/customers']);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  async changeTempPass() {}

  // drawlist() {
  //   this.checkTokenverify();
  //   if (this.roles.includes('Admin user')) {
  //     this.router.navigate(['/meal-plan']);
  //   } else if (this.roles.includes('User Manager')) {
  //     this.router.navigate(['/userlist']);
  //   } else {
  //     this.router.navigate(['/meal-plan']);
  //   }
  // }

  forgot() {
    this.router.navigate(['/forgotpass']);
  }

  async checkTokenverify() {
    console.log('token popup calls');
    let timerID;
    timerID = setInterval(() => {
      if (this.popups) {
        // this.api.checkRefreshToken().then((checktoken)=>{
        //   console.log('checktoken res==>',checktoken)
        //   if(checktoken){
        //     clearInterval(timerID);
        //   }
        // }).catch((err)=>{
        //   console.log(err)
        // }) ;
      } else {
        clearInterval(timerID);
      }
    }, 10 * 1000);
  }
}
