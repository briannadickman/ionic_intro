import { Component } from '@angular/core';

import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {
  constructor(public toastCtrl: ToastController) { }

   confirmSignIn(position: string) {
    let confirm = this.toastCtrl.create({
      message: 'You have clicked the Sign In button!',
      duration: 3000
    });

    confirm.present(confirm);
  }

}
