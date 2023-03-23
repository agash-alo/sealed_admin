import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from './layouts/full/full.component';
import { VerticalAppHeaderComponent } from './layouts/full/vertical-header/vertical-header.component';
import { VerticalAppSidebarComponent } from './layouts/full/vertical-sidebar/vertical-sidebar.component';
// import { HorizontalAppHeaderComponent } from './layouts/full/horizontal-header/horizontal-header.component';
import { HorizontalAppSidebarComponent } from './layouts/full/horizontal-sidebar/horizontal-sidebar.component';

import { AppBreadcrumbComponent } from './layouts/full/breadcrumb/breadcrumb.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';

// import { NgxSpinnerModule } from '../../node_modules/ngx-spinner';
// import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login/login.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RegisterComponent } from './register/register.component';
import { EnterOtpComponent } from './enter-otp/enter-otp.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
// import { DrawDetailsComponent } from './draw-details/draw-details.component';
// import { DrawPageComponent } from './draw-page/draw-page.component';
// import { TypeOfPrizeComponent } from './type-of-prize/type-of-prize.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

// import { AuditsComponent } from './audits/audits.component';
// import { PendingDrawListComponent } from './pending-draw-list/pending-draw-list.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';


// import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ServiceWorkerModule } from '@angular/service-worker';



import { PaymentsComponent } from './payments/payments.component';


import { OrderDetailsComponent } from './order-details/order-details.component';




import { DashboardComponent } from './dashboard/dashboard.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { SearchComponent } from './search/search.component';
import { DeliveryTripComponent } from './delivery-trip/delivery-trip.component';
import { StampDocumentComponent } from './stamp-document/stamp-document.component';
import { CouriersComponent } from './couriers/couriers.component';
import { CourierViewComponent } from './courier-view/courier-view.component';
import { CourierPayoutComponent } from './courier-payout/courier-payout.component';
import { CourierPayoutViewComponent } from './courier-payout-view/courier-payout-view.component';
import { CourierGeneratePayoutComponent } from './courier-generate-payout/courier-generate-payout.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { B2bTripsComponent } from './b2b-trips/b2b-trips.component';
import { B2bCustomersComponent } from './b2b-customers/b2b-customers.component';
import { PayoutComponent } from './payout/payout.component';
import { SettingComponent } from './setting/setting.component';
import{ Ng2SearchPipeModule} from 'ng2-search-filter'
import { JwtHelperService } from '@auth0/angular-jwt';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true,
};

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    VerticalAppHeaderComponent,
    SpinnerComponent,
    // AppBlankComponent,
    VerticalAppSidebarComponent,
    AppBreadcrumbComponent,
    // HorizontalAppHeaderComponent,
    HorizontalAppSidebarComponent,
    
    LoginComponent,
    
    RegisterComponent,
    EnterOtpComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    

    PaymentsComponent,

    OrderDetailsComponent,
    DashboardComponent,
    TripDetailsComponent,
    SearchComponent,
    DeliveryTripComponent,
    StampDocumentComponent,
    CouriersComponent,
    CourierViewComponent,
    CourierPayoutComponent,
    CourierPayoutViewComponent,
    CourierGeneratePayoutComponent,
    CustomersComponent,
    CustomerViewComponent,
    B2bTripsComponent,
    B2bCustomersComponent,
    PayoutComponent,
    SettingComponent,
   
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    DemoMaterialModule,
    FlexLayoutModule,
    PerfectScrollbarModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes, { useHash: true }),
    MatTableModule,
    MatInputModule,
    HttpClientModule,

    Ng2SearchPipeModule,
    
    CollapseModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    NgxDaterangepickerMd.forRoot(),
    ModalModule.forRoot(),
    // NgMultiSelectDropDownModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 6000,
      progressBar: true,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      enableHtml: true,
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: true,
    }),
  ],
  providers: [
    BsModalService,
    BsModalRef,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
