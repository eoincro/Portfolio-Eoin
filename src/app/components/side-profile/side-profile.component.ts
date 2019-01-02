import { Component, OnInit, Input } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile';
import Typed from 'typed.js';

@Component({
  selector: 'app-side-profile',
  templateUrl: './side-profile.component.html',
  styleUrls: ['./side-profile.component.scss']
})
export class SideProfileComponent implements OnInit {
  title = 'typed-angular';
  @Input() profile: Profile;

  constructor() {
  }

  ngOnInit() {
    const greeting = [
      'a software engineer',
      'a technologist ',
      'a keen learner',
      'a crossfiter',
    ];
    const options = {
      strings: greeting,
      typeSpeed: 100,
      backSpeed: 100,
      startDelay: 500,
      backDelay: 4500,
      loop: true,
    };
     const typed = new Typed('.typed-text', options);
     typed.start();
  }

}
