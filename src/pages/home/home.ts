import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  items = [
   'Login Page',
   'Account Info',
   'Profile Page',
   'Reset Password',
   'Landing Page'
  ];

  itemSelected(item: string) {
     console.log("Selected Item", item);
   }
}
