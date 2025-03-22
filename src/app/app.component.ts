import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ProjectNme = 'VIVEKANANDA SAMIDH SANGHA';
  currentLanguage: any = 'en';  
  languageCode = 'en'; 
  languageList = [  
    { 'languageCode': 'en', 'languageName': 'English' },  
    { 'languageCode': 'bn', 'languageName': 'বাংলা' },
    { 'languageCode': 'hi', 'languageName': 'हिंदी' }  
      
  ];  
  switchLang(lang: string) {
    this.translate.use(lang);
  }
  constructor(private _router: Router,public translate: TranslateService) {
    translate.addLangs(['en', 'bn','hi']);
    translate.setDefaultLang('en');
    
   }

}
