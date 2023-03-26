import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}
export interface Saperator {
  name: string;
  type?: string;
}
export interface SubChildren {
  state: string;
  name: string;
  type?: string;
}
export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
  child?: SubChildren[];
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  saperator?: Saperator[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: 'dashboard',
    name: 'Dashboard',
    type: 'link',
    icon: 'av_timer',
  },
  {
    state: 'search',
    name: 'Search',
    type: 'link',
    icon: 'search',
  },
  
  // {
  //   state: 'delivery_trip',
  //   name: 'Delivery Trip',
  //   type: 'link',
  //   icon: 'group',
  // },
  {
    state: 'stamp_document',
    name: 'stamp Document',
    type: 'link',
    icon: 'local_post_office',
  },
  {
    state: 'couriers',
    name: 'Couriers',
    type: 'link',
    icon: 'group',
  },
{
    state: 'customers',
    name: ' Customers',
    type: 'link',
    icon: 'shield',
  },
  {
    state: 'b2b-trips',
    name: ' B2b Trips',
    type: 'link',
    icon: 'supervised_user_circle',
  },

  {
    state: 'b2b-customers',
    name: 'B2b Customers',
    type: 'link',
    icon: ' supervisor_account',
  },

  {
    state: 'payout',
    name: 'Payouts',
    type: 'link',
    icon: 'credit_card',
  },

  {
    state: 'setting',
    name: 'Settings',
    type: 'link',
    icon: 'settings',
  },
  // {
  //   state: 'Plan-pricing',
  //   name: 'Plan Pricing',
  //   type: 'link',
  //   icon: 'group',
  // },

  // {
  //   state: 'coupon-mgnt',
  //   name: 'Coupon Management',
  //   type: 'link',
  //   icon: 'support',
  // },

  // {
  //   state: 'welcome-page',
  //   name: 'Welcome Page',
  //   type: 'link',
  //   icon: 'support',
  // },

  // {
  //   state: 'Subscription',
  //   name: 'Subscription Mangement',
  //   type: 'link',
  //   icon: 'subscriptions',
  // },
  // {
  //   state: 'Reports',
  //   name: 'Reports',
  //   type: 'link',
  //   icon: 'analytics',
  // },

  // {
  //   state: 'drawlist',
  //   name: 'Dashboard',
  //   type: 'link',
  //   icon: 'av_timer',
  // },
  // {
  //   state: 'meal-plan',
  //   name: 'Subcription Meal Plans',
  //   type: 'link',
  //   icon: 'support',
  // },
  // {
  //   state: 'meal-details',
  //   name: 'Meal Details',
  //   type: 'link',
  //   icon: 'support',
  // },
  // {
  //   state: 'conductDraw',
  //   name: 'Meal Category',
  //   type: 'link',
  //   icon: 'support',
  // },
  // {
  //   state: 'payments',
  //   name: 'Payment Deatils',
  //   type: 'link',
  //   icon: 'payments',
  // },

  // {
  //   state: 'conductDraw',
  //   name: 'Ingredients Mangement',
  //   type: 'link',
  //   icon: 'support',
  // },

  // {
  //   state: 'Subscription',
  //   name: 'Subscription Mangement',
  //   type: 'link',
  //   icon: 'subscriptions',
  // },
  // {
  //   state: 'coupon-mgnt',
  //   name: 'Coupon Management',
  //   type: 'link',
  //   icon: 'support',
  // },

  // {
  //   state: 'conductDraw',
  //   name: 'Reports',
  //   type: 'link',
  //   icon: 'analytics',
  // },

  // {
  //   state: 'userlist',
  //   name: 'User Management',
  //   type: 'link',
  //   icon: 'person'
  // },
  // {
  //   state: 'Audits',
  //   name: 'Audits',
  //   type: 'link',
  //   icon: 'event_note'
  // },
];

const ADMINMENUITEMS = [
  {
    state: 'drawlist',
    name: 'Campaign Master',
    type: 'link',
    icon: 'support',
  },
  {
    state: 'conductDraw',
    name: 'Draw List',
    type: 'link',
    icon: 'support',
  },
  {
    state: 'userlist',
    name: 'User Management',
    type: 'link',
    icon: 'person',
  },
  // {
  //   state: 'Audits',
  //   name: 'Audits',
  //   type: 'link',
  //   icon: 'event_note'
  // },
];

const USERMENUITEMS = [
  {
    state: 'userlist',
    name: 'User Management',
    type: 'link',
    icon: 'person',
  },
];

@Injectable()
export class MenuItems {
  userInfo: any;
  adminMenu: boolean = false;
  constructor() {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo') as never);
    let userrole = this.userInfo?.role;
    // userrole.forEach((d, i) => {
    //   if (d.role_name == 'Admin user' && d.id == 4) {
    //     this.adminMenu = true;
    //   }
    // });
  }

  getMenuitem(): Menu[] {
    return MENUITEMS;
  }

  getMenuitems(type): Menu[] {
    if (type == 'Admin') {
      return ADMINMENUITEMS;
    } else if (type == 'Usermanagement') {
      return USERMENUITEMS;
    } else {
      return MENUITEMS;
    }
  }
}
