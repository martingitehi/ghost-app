import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocalServices } from '../../services/local.services';
import { Dream } from '../../interfaces/dream.interface';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  categories: string[] = [];
  dreams: Dream[] = [];
  tags: string[] = [];
  clusters: any[] = []

  constructor(public navCtrl: NavController, private local: LocalServices) {
    this.dreams = this.local.getDreams();
  }

  ionViewDidLoad() {
    this.categories = this.local.getCategories()
    this.categories.forEach(cat => {
      this.clusters.push({ category: cat, dreams: this.getDreamsInCategory(cat) })
    })
  }

  getDreamsInCategory(category: string): Number {
    let _dreams: Dream[] = [];
    this.categories.forEach(category => {
      this.dreams.forEach(dream => {
        if (dream.category == category) {
          _dreams.push(dream)
        }
      });
    });
    return _dreams.length;
  }



}
