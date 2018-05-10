import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Dream } from '../../interfaces/dream.interface';
import { LocalServices } from '../../services/local.services';

@Component({
  selector: 'dream-add',
  templateUrl: 'dream-add.html'
})
export class AddDream {
  mode: string = '';
  dream: Dream;
  tags: string[] = [];
  categories: string[] = [];
  selectOptions: any = {
    title: 'Choose Category'
  }


  constructor(private navCtrl: NavController, private local: LocalServices, private navParams: NavParams, private alertCtrl: AlertController) {
    this.dream = {
      title: '',
      description: '',
      date: new Date,
      category: '',
      tags: []
    }
  }

  ionViewDidLoad() {
    this.local.getCategories()
  }


  saveDream() {
    if (this.dream !== null) {
      let dreams = JSON.parse(localStorage.getItem('dreams'));
      dreams.unshift(this.dream);
      localStorage.setItem('dreams', JSON.stringify(dreams))
    }
    this.local.presentToast('Dream has been added', 'bottom', false, 3000)
  }

  addTag() {
    let prompt = this.alertCtrl.create({
      title: 'Add Tag',
      message: "Enter a name for this tag",
      inputs: [
        {
          name: 'title',
          placeholder: 'Tag Name'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.tags.unshift(data.title)
            this.dream.tags.push(data.title)
          }
        }
      ]
    });
    prompt.present();
  }
}
