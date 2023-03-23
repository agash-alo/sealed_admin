import { Injectable } from '@angular/core';
// import { type } from 'os';

import { Observable, observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
// import { JwtHelperService } from '@auth0/angular-jwt';
// import { map,tap,catcherrors} from rxjs/operators;

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private auth: AuthService) {}

  // login
  LoginIn(postData: any): Observable<any> {
    const url = 'auth/login';
    return this.auth.postLogin(url, postData).pipe(map((res) => res));
  }

  // customer getlist
  getListUserDetails(
    usertype?: any,
    limit?: any,
    offset?: any,
    value?: any
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '';
      if (value) {
        url = `users?userType=${usertype}&limit=${limit}&offset=${offset}&value=${value}`;
      } else {
        url = `users?userType=${usertype}&limit=${limit}&offset=${offset}`;
      }

      this.auth
        .guestAuthGetapi(url)
        .then((resp: any) => {
          resolve(resp);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  }
  getListUsergetById(userId: any): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '';
      url = `users/${userId}`;
      this.auth
        .guestAuthGetapi(url)
        .then((resp: any) => {
          resolve(resp);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  }
  // getListUsergetByAddress(userId: any, type: any): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     let url = '';
  //     url = `users/${userId}/${type}`;
  //     this.auth
  //       .guestAuthGetapi(url)
  //       .then((resp: any) => {
  //         resolve(resp);
  //       })
  //       .catch((err: any) => {
  //         reject(err);
  //       });
  //   });
  // }

  // courier getlist
  getListCouriergetById(courierId: any): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '';
      url = `users/${courierId}`;
      this.auth
        .guestAuthGetapi(url)
        .then((resp: any) => {
          resolve(resp);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  }
  // getCourierdetailgetByAddress(courierId: any,type:any): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     let url = '';
  //     url = `users/${courierId}/${type}`;
  //     this.auth
  //       .guestAuthGetapi(url)
  //       .then((resp: any) => {
  //         resolve(resp);
  //       })
  //       .catch((err: any) => {
  //         reject(err);
  //       });
  //   });
  // }
  getAllCourierDetails(
    usertype?: any,
    limit?: any,
    offset?: any,
    value?: any
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '';
      if (value) {
        url = `users?userType=${usertype}&limit=${limit}&offset=${offset}&value=${value}`;
      } else {
        url = `users?userType=${usertype}&limit=${limit}&offset=${offset}`;
      }
      this.auth
        .guestAuthGetapi(url)
        .then((resp: any) => {
          resolve(resp);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  }
  // getcourierlist(usertype?:any,limit?:any,offset?:any,value?:any ):Promise<any>{
  // return new Promise((resolve, reject) => {
  //   const rl=`deliveryman?usrtType=${usertype}&limit=${limit}&offset=${offset}&value-${value}`
  // })
  // this.auth
  //   .guestAuthGetapi(url)
  //   .then((resp: any) => {
  //     resolve(resp);
  //   })
  //   .catch((err: any) => {
  //     reject(err);
  //   });
  // }
}
