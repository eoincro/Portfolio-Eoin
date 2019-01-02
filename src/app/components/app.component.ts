import { Component, OnInit } from '@angular/core';
import { ProfileDataService } from '../services/profile-data.service';
import { Profile } from '../interfaces/profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  apptitle = 'portfolio-eoin';

  profile: Profile;

  constructor(private profileData: ProfileDataService) {
  }

  ngOnInit(): void {
    this.profile = this.profileData.data;
  }
}
