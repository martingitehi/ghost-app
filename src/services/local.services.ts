import { Injectable } from "@angular/core";
import { Toast, ToastController, ModalOptions, Modal, ModalController } from "ionic-angular";
import { Dream } from "../interfaces/dream.interface";

@Injectable()

export class LocalServices {
    private toastCtrl: any;
    constructor(toastCtrl: ToastController, private modalCtrl: ModalController) {
        this.toastCtrl = toastCtrl;
    }

    presentToast(data: any, position: string, showButton: boolean, duration: number, buttonText?: string, dismissByPageChange?: boolean) {
        let toast: Toast = this.toastCtrl.create({
            message: data,
            duration: duration,
            position: position,
            showCloseButton: showButton,
            closeButtonText: buttonText,
            dismissOnPageChange: dismissByPageChange
        });
        toast.present();
    }

    presentModal(page: any, data?: any) {
        const modalOptions: ModalOptions = {
            enableBackdropDismiss: false
        }
        let modal: Modal = this.modalCtrl.create(page, data, modalOptions);
        modal.present();
    }

    getDreams(): Dream[] {
        return JSON.parse(localStorage.getItem('dreams'))
    }
    

    getCategories(): string[] {
        let categories: string[] = []
        //loop through the dreams array and grab all unique categories
        //alternatively use the lodash module with .uniq()
        let dreams: Dream[] = JSON.parse(localStorage.getItem('dreams'));
        if (dreams.length > 0) {
            for (let i = 0; i < dreams.length; i++) {
                if (i == 0) {
                    categories.push(dreams[i].category)
                }
                else {
                    if (dreams[i].category !== dreams[0].category) {
                        categories.push(dreams[i].category)
                    }
                }
            }
        }
        return categories;
    }
}