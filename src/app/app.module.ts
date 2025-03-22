/* import { NgModule } from '@angular/core';*/
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


/* Pages Component */
import { HomeComponent } from './components/home/home.component';
import { PhilosophyComponent } from './components/philosophy/philosophy.component';
import { AimobjectivesComponent } from './components/aimobjectives/aimobjectives.component';
/* Acivity Pages Component */
import { ActivitiesComponent } from './components/activities/activities.component';
import { AnnualprogramComponent } from './components/activities/annualprogram/annualprogram.component';
import { BlooddonationComponent } from './components/activities/blooddonation/blooddonation.component';
import { FloodreliefComponent } from './components/activities/floodrelief/floodrelief.component';
import { GovtservicepreparationcoachingComponent } from './components/activities/govtservicepreparationcoaching/govtservicepreparationcoaching.component';
import { HealthandeyecheckupcampComponent } from './components/activities/healthandeyecheckupcamp/healthandeyecheckupcamp.component';
import { PersonalitydevelopmentcourseComponent } from './components/activities/personalitydevelopmentcourse/personalitydevelopmentcourse.component';
import { StudycircleComponent } from './components/activities/studycircle/studycircle.component';
import { StudentlevelcoachingComponent } from './components/activities/studentlevelcoaching/studentlevelcoaching.component';
import { SamidhayanComponent } from './components/activities/samidhayan/samidhayan.component';
import { YouthdaycelebrationComponent } from './components/activities/youthdaycelebration/youthdaycelebration.component';
import { TestfunctionalitiesComponent } from './components/testfunctionalities/testfunctionalities.component';
import { BlooddonorsinfotestComponent } from './components/activities/blooddonorsinfotest/blooddonorsinfotest.component';


/* Gallery Pages Component */
import { GalleriesComponent } from './components/galleries/galleries.component';
import { AudiogalleryComponent } from './components/galleries/audiogallery/audiogallery.component';
import { PhotogalleryComponent } from './components/galleries/photogallery/photogallery.component';
import { VideogalleryComponent } from './components/galleries/videogallery/videogallery.component';

import { BoardmembersComponent } from './components/boardmembers/boardmembers.component';
import { DonationComponent } from './components/donation/donation.component';
import { BranchesComponent } from './components/branches/branches.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { LoginComponent } from './components/login/login.component';


import { BannerComponent } from './components/banner/banner.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';



/* Services */
import { BlooddonationService } from './services/blooddonation.service';
/* Angular material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularmaterialModule } from './material/angularmaterial/angularmaterial.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavbarmenuComponent } from './components/navbarmenu/navbarmenu.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhilosophyComponent,
    AimobjectivesComponent,
    ActivitiesComponent,
    AnnualprogramComponent,
    BlooddonationComponent,
    BoardmembersComponent,
    DonationComponent,
    BranchesComponent,
    ContactusComponent,
    LoginComponent,
    BannerComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    FloodreliefComponent,
    GovtservicepreparationcoachingComponent,
    HealthandeyecheckupcampComponent,
    PersonalitydevelopmentcourseComponent,
    StudycircleComponent,
    StudentlevelcoachingComponent,
    SamidhayanComponent,
    YouthdaycelebrationComponent,
    GalleriesComponent,
    AudiogalleryComponent,
    PhotogalleryComponent,
    VideogalleryComponent,
    TestfunctionalitiesComponent,
    BlooddonorsinfotestComponent,
    NavbarmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    NgbModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    AngularmaterialModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [BlooddonationService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
