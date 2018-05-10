import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, AlertController, ToastController, Toast, Alert, NavController } from 'ionic-angular';
import { Dream } from '../../interfaces/dream.interface';
import { AddDream } from '../dream-add/dream-add';

@IonicPage()
@Component({
  selector: 'page-popover-options',
  templateUrl: 'popover-options.html',
})
export class PopoverOptionsPage {
  options: any[];
  product: any;
  dreams: any[] = [];

  constructor(public navParams: NavParams,
    private view: ViewController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private navCtrl: NavController) {
    this.dreams = JSON.parse(localStorage.getItem('dreams'));
    this.product = this.navParams.get('product_info');
    this.options = [
      { id: 1, text: 'Delete' },
      { id: 2, text: 'Edit' }
    ];
  }

  dismiss() {
    this.view.dismiss();
  }

  optionTapped(dream: Dream, id: number) {
    //dismiss popover first
    this.dismiss();

    if (id == 1) {
      let confirm: Alert = this.alertCtrl.create({
        title: 'Delete Dream?',
        message: 'Are you sure you want to delete this dream ?',
        enableBackdropDismiss: false,

        buttons: [
          {
            text: 'No',
            handler: () => {
              //revert back to products
            }
          },
          {
            text: 'Yes',
            handler: () => {
              this.dreams[dream.title].splice(0, 1)
              //present confirmation message to user
              let toast: Toast = this.toastCtrl.create({
                message: `${dream.title} has been deleted`,
                duration: 3000,
                dismissOnPageChange: true,
                position: 'bottom'
              });
              toast.present();
            }
          }
        ]
      });
      confirm.present();
    }
    else if (id == 2) {
      this.navCtrl.push(AddDream, {
        dream: dream, mode: 'edit'
      });
    }
  }


}
