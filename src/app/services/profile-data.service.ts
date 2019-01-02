import { Injectable } from '@angular/core';
import { Profile } from '../interfaces/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {

  data: Profile;

  constructor() {
    this.data = {
      title: 'Software engineer &nbsp;&bull;&nbsp; Frontend Developer <br>&nbsp;&bull;&nbsp; Mobile Web enthusiast.',
      subtitle: '',
      description: 'I have always been passionate about computer science and discovering new technologies to build innovative solutions.',
      personalInfos: {
        fullname: 'Eoin Cronin',
        email: 'eoin.c.cronin@gmail.com',
        address: 'Cork Ireland',
        phone: '+35386051077',
        avatar: '../../../assets/images/EOINCRONIN.png'
      },
      links: [{
        name: 'Twitter',
        icon: 'icon fa-twitter',
        url: '',
        active: true
      }, {
        name: 'GitHub',
        icon: 'icon fa-github',
        url: 'https://github.com/eoincro',
        active: true
      }, {
        name: 'LinkedIn',
        icon: 'icon fa-linkedin',
        url: 'https://www.linkedin.com/in/eoin-cronin-496954118',
        active: true
      }, {
        name: 'Email',
        icon: 'icon fa-envelope-o',
        url: 'mailto:eoin.c.cronin@gmail.com',
        active: false
      }]
    };
  }
}
