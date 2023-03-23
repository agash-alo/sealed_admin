import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {


  banner_management=[
    {id:"1",image:"../../assets/images/custm-nbb/settings-banner.png"},
    {id:"2",image:"../../assets/images/custm-nbb/settings-banner.png"},
    {id:"3",image:"../../assets/images/custm-nbb/settings-banner.png"},
    {id:"4",image:"../../assets/images/custm-nbb/settings-banner.png"},
    {id:"5",image:"../../assets/images/custm-nbb/settings-banner.png"},
    
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
