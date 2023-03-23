import { Routes } from '@angular/router';

import { B2bCustomersComponent } from './b2b-customers/b2b-customers.component';
import { B2bTripsComponent } from './b2b-trips/b2b-trips.component';

import { CourierGeneratePayoutComponent } from './courier-generate-payout/courier-generate-payout.component';
import { CourierPayoutViewComponent } from './courier-payout-view/courier-payout-view.component';
import { CourierPayoutComponent } from './courier-payout/courier-payout.component';
import { CourierViewComponent } from './courier-view/courier-view.component';
import { CouriersComponent } from './couriers/couriers.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { CustomersComponent } from './customers/customers.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { DeliveryTripComponent } from './delivery-trip/delivery-trip.component';


// import { AddNewDrawComponent } from './add-new-draw/add-new-draw.component';
// import { AddUserComponent } from './add-user/add-user.component';
// import { AuditsComponent } from './audits/audits.component';
// import { ConductDrawComponent } from './conduct-draw/conduct-draw.component';
// import { DrawDetailsComponent } from './draw-details/draw-details.component';
// import { DrawPageComponent } from './draw-page/draw-page.component';
// import { DrawlistComponent } from './drawlist/drawlist.component';
import { EnterOtpComponent } from './enter-otp/enter-otp.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './login/login.component';



import { OrderDetailsComponent } from './order-details/order-details.component';

import { PaymentsComponent } from './payments/payments.component';
import { PayoutComponent } from './payout/payout.component';

// import { PendingDrawListComponent } from './pending-draw-list/pending-draw-list.component';
import { RegisterComponent } from './register/register.component';

import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SearchComponent } from './search/search.component';

import { SettingComponent } from './setting/setting.component';
import { StampDocumentComponent } from './stamp-document/stamp-document.component';

import { TripDetailsComponent } from './trip-details/trip-details.component';
// import { TypeOfPrizeComponent } from './type-of-prize/type-of-prize.component';

 import { AuthGuardServiceService } from './service/auth-guard-service.service'


export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
      },
        {
        path: 'dashboard',
        component: DashboardComponent,

        data: {
          title: 'Dashboard',
          urls: [{ title: 'Dashboard', url: '/   ' }],
        },
      },
      {
        path: 'trip_details',
        component: TripDetailsComponent,

        data: {
          title: 'Dashboard',
          urls: [{ title: 'trip_details', url: '/   ' }],
        },
      },
      {
        path: 'search',
        component: SearchComponent,

        data: {
          title: 'Search',
          urls: [{ title: 'Dashboard', url: '/   ' }, { title: 'search' }],
        },
      },
      {
        path: 'delivery_trip',
        component: DeliveryTripComponent,

        data: {
          title: 'Delivery_trip',
          urls: [{ title: 'Dashboard', url: '/   ' }, { title: 'delivery_trip' }],
        },
      },
      {
        path: 'stamp_document',
        component: StampDocumentComponent,

        data: {
          title: 'Stamp_Document',
          urls: [{ title: 'Dashboard', url: '/   ' }, { title: 'stamp_document' }],
        },
      },
      {
        path: 'couriers',
        component: CouriersComponent,

        data: {
          title: 'Couriers',
          urls: [{ title: 'Dashboard', url: '/   ' }, { title: 'couriers' }],
        },
      },
      {
        path: 'courier-view',
        component: CourierViewComponent,

        data: {
          title: 'Courier-view',
          urls: [{ title: 'Dashboard', url: '/   ' }, { title: 'courier-view' }],
        },
      },
      {
        path: 'courier-payout',
        component: CourierPayoutComponent,

        data: {
          title: 'Courier-payout',
          urls: [{ title: 'Dashboard', url: '/   ' }, { title: 'courier-payout' }],
        },
      },
      {
        path:'courier-payout-view',
        component:CourierPayoutViewComponent,

        data:{
          title:'Courier-payout-view',
          urls:[{ title: 'Dashboard', url: '/ '},{ title: 'courier-payout-view'}],
        },
      },
      {
        path:'courier-generate-payout',
        component:CourierGeneratePayoutComponent,

        data:{
          title:'Courier-generate-payout',
          urls:[{ title: 'Dashboard', url: '/ '},{ title: 'courier-generate-payout'}],
        },
      },
      {
        path:'customers',
        component:CustomersComponent,

        data:{
          title:'Customers',
          urls:[{ title: 'Dashboard', url: '/ '},{ title: 'customers'}],
        },
      },
       {
        path:'customer-view',
        component:CustomerViewComponent,

        data:{
          title:'Customer-view',
          urls:[{ title: 'Dashboard', url: '/ '},{ title: 'customer-view'}],
        },
      },
      {
        path:'b2b-trips',
        component:B2bTripsComponent,

        data:{
          title:'B2B-trips',
          urls:[{ title: 'Dashboard', url: '/ '},{ title: 'b2b-trips'}],
        },
      },
      {
        path:'b2b-customers',
        component:B2bCustomersComponent,

        data:{
          title:'B2B-customers',
          urls:[{ title: 'Dashboard', url: '/ '},{ title: 'b2b-customers'}],
        },
      },
      {
        path:'payout',
        component:PayoutComponent,

        data:{
          title:'Payout',
          urls:[{ title: 'Dashboard', url: '/ '},{ title: 'payout'}],
        },
      },
      {
        path:'setting',
        component:SettingComponent,

        data:{
          title:'Settings',
          urls:[{ title: 'Dashboard', url: '/ '},{ title: 'setting'}],
        },
      },



      



      
      
      

      

      
      
      
      {
        path: 'payments',
        component: PaymentsComponent,

        data: {
          title: 'Payment Details',
          urls: [
            { title: 'Dashboard', url: '/   ' },
            { title: 'Payment Details' },
          ],
        },
      },

     

      {
        path: 'Reports',
        component: OrderDetailsComponent,

        data: {
          title: 'Reports',
          urls: [{ title: 'Dashboard', url: '/   ' }, { title: 'Reports' }],
        },
      },

      
      // {
      //     path: 'addUser',
      //     component: AddUserComponent,

      //     data: {
      //         title: 'Add User',
      //         urls: [
      //             { title: 'User Management', url: '/userlist' },
      //             { title: 'Add User' }
      //         ]
      //     }
      // },
      
      // {
      //     path: 'drawDetails',
      //     component: DrawDetailsComponent,
      //     data: {
      //         title: 'Draw Details',
      //         urls: [
      //             { title: 'Draw List', url: '/conductDraw' },
      //             { title: 'Draw Details' }
      //         ]
      //     }
      // },
      // {
      //     path: 'drawPage',
      //     component: DrawPageComponent,
      //     data: {
      //         title: 'Conduct Draw',
      //         urls: [
      //             { title: 'Draw List', url: '/conductDraw' },
      //             { title: 'Conduct Draw' }
      //         ]
      //     }
      // },

      // {
      //     path: 'typeofprize',
      //     component: TypeOfPrizeComponent,
      //     data: {
      //         title: 'type of prize',
      //         urls: [
      //             { title: 'Dashboard', url: '/drawlist' },
      //             { title: 'type of prize' }
      //         ]
      //     }
      // },
      // {
      //   path: 'Reports',
      //   component: ReportsComponent,
      //   data: {
      //     title: 'Reports',
      //     urls: [
      //       { title: 'Draw List', url: '/conductDraw' },
      //       { title: 'Reports' },
      //     ],
      //   },
      // },

      // {
      //     path: 'Audits',
      //     component: AuditsComponent,
      //     data: {
      //         title: 'Audits',
      //         urls: [
      //             { title: 'Dashboard', url: '/drawlist' },
      //             { title: 'Audits' }
      //         ]
      //     }
      // },

      // {
      //     path: 'pendingDrawList',
      //     component: PendingDrawListComponent,
      //     data: {
      //         title: 'Pending Draw List',
      //         urls: [
      //             { title: 'Campaign Master', url: '/drawlist' },
      //             { title: 'Pending Draw List' }
      //         ]
      //     }
      // },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page',
    },
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Registration',
    },
  },
  {
    path: 'otp',
    component: EnterOtpComponent,
    data: {
      title: 'OTP',
    },
  },

  {
    path: 'forgotpass',
    component: ForgotPasswordComponent,
    data: {
      title: 'Forgot password',
    },
  },
  
  
  {
    path: 'resetPassword',
    component: ResetPasswordComponent,
    data: {
      title: 'Reset password',
    },
  },
];
