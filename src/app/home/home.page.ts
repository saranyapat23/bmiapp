import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private page1 : NavController) {}

  GoToLogin() {
    this.page1.navigateForward('/login')
  }

}
