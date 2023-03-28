import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { type } from 'os';

import { Observable, observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
// import { JwtHelperService } from '@auth0/angular-jwt';
// import { map,tap,catcherrors} from rxjs/operators;

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  userId: any;
  courierId: any;
  constructor(private auth: AuthService, private http: HttpClient) {}

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
  //getlistcustomerorderactivetrip
  getListCustomerActiveTrip(customerId: any): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '';
      url = `orders?userId=${customerId}&orderStatus=new,orderAssigned,orderInProgress,orderPickUped`;
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

  // getlistcustomerordercompletetrip

  getListCustomerCompleteTrip(customerId: any): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '';
      url = `orders?userId=${customerId}&orderStatus=delivered`;
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

  //getlistcourierorderactivetrip
  getCourierOrderActiveTrip(courierId: any): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '';
      url = `orders?userId=${courierId}&orderStatus=new,orderAssigned,orderInProgress,orderPickUped`;
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

  // getlistcourierordercompletetrip

  getCourierOrderCompleteTrip(courierId: any): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '';
      url = `orders?userId=${courierId}&orderStatus=delivered`;
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
  //verified update
  // updateCourierVerified(userId: any, body: any): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     let url = '';
  //     url = `users/${userId}`;
  //     this.auth
  //       .postGuestAuthApiData(url,body)
  //       .then((resp: any) => {
  //         resolve(resp);
  //       })
  //       .catch((err: any) => {
  //         reject(err);
  //       });
  //   });
  // }

  updateCourierVerified(userId: any, verified: any) {
    let url = `users/${userId}`;
    return this.auth.putGuestAuthApiData(url, verified).pipe(map((res) => res));
  }
  //delete courier
  deleteCourier(courierId: any) {
    let url = `users/${courierId}`;
    return this.auth.deleteGuestAuthApiData(url).pipe(map((res) => res));
  }
  deleteBanner(id: any) {
    let url = `banner/${id}`;
    return this.auth.deleteGuestAuthApiData(url).pipe(map((res) => res));
  }

  updateBanner(id:any){
    let url = `banner/${id}`;
    return this.auth.putGuestAuthApiData(url,id).pipe(map((res) =>res));
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
  getBannerList(type?: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const url = `banner?type=${type}`;
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
  UploadFile(fileData): Observable<any> {
    // console.log('FROM file upload ==>', fileData);

    this.userId = localStorage.getItem('useridA')
      ? JSON.parse(localStorage.getItem('useridA') || '')
      : '';

    this.courierId = localStorage.getItem('courierViewId')
      ? JSON.parse(localStorage.getItem('courierViewId') || '')
      : '';

    let url = environment.baseUrl + `file/upload/${this.courierId}`;
    return this.http
      .post<any>(url, fileData, {
        headers: {
          Authorization: `${sessionStorage.getItem('tokenA')}`,
          userId: this.userId,
        },
        reportProgress: true,
        observe: 'events',
      })
      .pipe(
        map((event: any) => {
          switch (event.type) {
            case HttpEventType.UploadProgress:
              const progress = Math.round((100 * event.loaded) / event.total);

              // console.log('progress ')

              return { status: 'progress', message: progress };

            case HttpEventType.Response:
              // console.log('response ', event.body);
              return event.body;
            default:
              return `Unhandled event: ${event.type}`;
          }
        }),

        catchError(this.handleError('err', []))
      );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (err: any): Observable<T> => {
      console.error('SERVER ERR', err); // log to console instead ad
      // console.log(`${operation} failed: ${err.message}`);
      // this.alertServ.displayAlert("", "Server Connection Problem"+ JSON.stringify(error));
      if ((err.status = 500)) {
        // this.snackBar.open(err.error.message, 'close');
        // return err.error.message;
        return throwError(err);
      }
      if ((err.status = 401)) {
        // alert('Server Connection Problem');
      } else if ((err.status = 403)) {
        // alert('Server Connection Problem');
      } else {
        // alert(err.error.message);
        // return;
      }
      return of(result as T);
    };
  }

  // getlistb2bcustomer

  getAllb2bCustomer(
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

  updateb2bcustomer(userId: any, verified: any) {
    let url = `users/${userId}`;
    return this.auth.putGuestAuthApiData(url, verified).pipe(map((res) => res));
  }
  createBanner(payload: any) {
    let url = `banner`;
    return this.auth.postGuestAuthApiData(url, payload).pipe(map((res) => res));
  }
  // -----     banner management    ----

  uploadBanner(fileData): Observable<any> {
    this.userId = localStorage.getItem('useridA')
      ? JSON.parse(localStorage.getItem('useridA') || '')
      : '';
    let url = environment.baseUrl + `file/bannerUpload`;
    return this.http
      .post<any>(url, fileData, {
        headers: {
          Authorization: `${sessionStorage.getItem('tokenA')}`,
          userId: this.userId,
        },
        reportProgress: true,
        observe: 'events',
      })
      .pipe(
        map((event: any) => {
          switch (event.type) {
            case HttpEventType.UploadProgress:
              const progress = Math.round((100 * event.loaded) / event.total);

              // console.log('progress ')

              return { status: 'progress', message: progress };

            case HttpEventType.Response:
              // console.log('response ', event.body);
              return event.body;
            default:
              return `Unhandled event: ${event.type}`;
          }
        }),

        catchError(this.handleError('err', []))
      );
  }
}
