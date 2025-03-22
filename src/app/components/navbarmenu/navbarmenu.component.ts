import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbarmenu',
  templateUrl: './navbarmenu.component.html',
  styleUrls: ['./navbarmenu.component.css']
})
export class NavbarmenuComponent {
  currentLanguage: any = 'en';  
  languageCode = 'en'; 
  languageList = [  
    { 'languageCode': 'en', 'languageName': 'English' },  
    { 'languageCode': 'bn', 'languageName': 'বাংলা' },
    { 'languageCode': 'hi', 'languageName': 'हिंदी' }  
      
  ];  
  //translate: any;
  switchLang(lang: string) {
    this.translate.use(lang);
  }
  constructor(private _router: Router,public translate: TranslateService) { }


}
