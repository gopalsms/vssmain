import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Pages Component */
import { HomeComponent } from './components/home/home.component';
import { PhilosophyComponent } from './components/philosophy/philosophy.component';
import { AimobjectivesComponent } from './components/aimobjectives/aimobjectives.component';
/* Acivity Pages Component */
import { ActivitiesComponent } from './components/activities/activities.component';
import { AnnualprogramComponent } from './components/activities/annualprogram/annualprogram.component';
import { FloodreliefComponent } from './components/activities/floodrelief/floodrelief.component';
import { GovtservicepreparationcoachingComponent } from './components/activities/govtservicepreparationcoaching/govtservicepreparationcoaching.component';
import { HealthandeyecheckupcampComponent } from './components/activities/healthandeyecheckupcamp/healthandeyecheckupcamp.component';
import { PersonalitydevelopmentcourseComponent } from './components/activities/personalitydevelopmentcourse/personalitydevelopmentcourse.component';
import { StudycircleComponent } from './components/activities/studycircle/studycircle.component';
import { StudentlevelcoachingComponent } from './components/activities/studentlevelcoaching/studentlevelcoaching.component';
import { SamidhayanComponent } from './components/activities/samidhayan/samidhayan.component';
import { YouthdaycelebrationComponent } from './components/activities/youthdaycelebration/youthdaycelebration.component';


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


const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'home', component:HomeComponent },  // you must add your component here
  { path: 'philosophy', component:PhilosophyComponent },  
  { path: 'aimobjectives', component:AimobjectivesComponent },

  //{ path: 'activities', component: ActivitiesComponent,
    //children :[
                //{ path: 'annualprogram', component: ActivitiesComponent},
                //{ path: 'annualprogram', component: AnnualprogramComponent},
                //{ path: 'blooddonation', component: BlooddonationComponent},
                //{ path: 'floodrelief', component:FloodreliefComponent },
                //{ path: 'govtservicepreparationcoaching', component:GovtservicepreparationcoachingComponent },
                //{ path: 'healthandeyecheckupcamp', component:HealthandeyecheckupcampComponent },
                //{ path: 'personalitydevelopmentcourse', component:PersonalitydevelopmentcourseComponent },
                //{ path: 'studycircle', component:StudycircleComponent },
                //{ path: 'studentlevelcoaching', component:StudentlevelcoachingComponent },
                //{ path: 'samidhayan', component:SamidhayanComponent },
                //{ path: 'youthdaycelebration', component:YouthdaycelebrationComponent },
                //{ path: 'testfunctionalities', component:TestfunctionalitiesComponent }
              //]
  //},

  { path: 'activities', component:ActivitiesComponent },
  { path: 'annualprogram', component:AnnualprogramComponent },
  { path: 'floodrelief', component:FloodreliefComponent },
  { path: 'govtservicepreparationcoaching', component:GovtservicepreparationcoachingComponent },
  { path: 'healthandeyecheckupcamp', component:HealthandeyecheckupcampComponent },
  { path: 'personalitydevelopmentcourse', component:PersonalitydevelopmentcourseComponent },
  { path: 'studycircle', component:StudycircleComponent },
  { path: 'studentlevelcoaching', component:StudentlevelcoachingComponent },
  { path: 'samidhayan', component:SamidhayanComponent },
  { path: 'youthdaycelebration', component:YouthdaycelebrationComponent },
  
  //{ path: '',   redirectTo: '/blooddonationtestList', pathMatch: 'full' },

  { path: 'galleries', component:GalleriesComponent },
  { path: 'audiogallery', component:AudiogalleryComponent },
  { path: 'photogallery', component:PhotogalleryComponent },
  { path: 'videogallery', component:VideogalleryComponent },

  { path: 'boardmembers', component:BoardmembersComponent },
  { path: 'donation', component:DonationComponent },
  { path: 'branches', component:BranchesComponent },
  { path: 'contactus', component:ContactusComponent },
  { path: 'login', component:LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
