import { Component } from '@angular/core';
import { MainNavComponent } from './main-nav';
import { Routes , ROUTER_DIRECTIVES} from '@angular/router';
import { RacesComponent } from './+races';
import { RaceComponent } from './+race';
import { FriendsComponent } from './+friends';
import { FriendComponent } from './+friend';
import { SettingsComponent } from './+settings';

@Component({
  moduleId: module.id,
  selector: 'avi-race-tracker-app',
  templateUrl: 'avi-race-tracker.component.html',
  styleUrls: ['avi-race-tracker.component.css'],
   directives: [
    MainNavComponent
  ]
})
@Routes([
  {path: '/races', component: RacesComponent},
  {path: '/race', component: RaceComponent},
  {path: '/friends', component: FriendsComponent},
  {path: '/friend', component: FriendComponent},
  {path: '/settings', component: SettingsComponent}
])
export class AviRaceTrackerAppComponent {
  title = 'avi-race-tracker works!';
}
