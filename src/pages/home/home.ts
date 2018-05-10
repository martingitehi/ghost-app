import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { Dream } from '../../interfaces/dream.interface';
import { LocalServices } from '../../services/local.services';
import { AddDream } from '../dream-add/dream-add';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  dreams: Dream[] = [];

  constructor(public navCtrl: NavController, private local: LocalServices, private storage: NativeStorage, popoverCtrl: PopoverController) {

    //add some starters
    this.dreams = [
      {
        title: 'Night in Pluto',
        description: 'lorem ipsum is dreaming of going to space to see monkey pie ghost and the moon people dancing like canivores on the other isde of the ocean we shall see heaven shining like a new mace mantle on the order of new changes i love code come on.',
        date: new Date,
        category: 'Space Dreams',
        tags: ['creepy', 'moon', 'pluto', 'scary']
      },
      {
        title: 'Mojo Jojo and I',
        description: 'lorem ipsum is dreaming of going to space to see monkey pie ghost and the moon people dancing like canivores on the other isde of the ocean we shall see heaven shining like a new mace mantle on the order of new changes i love code come on.',
        date: new Date,
        category: 'Cartoon Monsters',
        tags: ['creepy', 'moon', 'pluto', 'scary']
      },
      {
        title: 'Remembering Mars',
        description: 'lorem ipsum is dreaming of going to space to see monkey pie ghost and the moon people dancing like canivores on the other isde of the ocean we shall see heaven shining like a new mace mantle on the order of new changes i love code come on.',
        date: new Date,
        category: 'Space Dreams',
        tags: ['creepy', 'moon', 'pluto', 'scary']
      },
      {
        title: 'Fighting the Closet Monster',
        description: 'lorem ipsum is dreaming of going to space to see monkey pie ghost and the moon people dancing like canivores on the other isde of the ocean we shall see heaven shining like a new mace mantle on the order of new changes i love code come on.',
        date: new Date,
        category: 'Lore Dreams',
        tags: ['creepy', 'moon', 'pluto', 'scary']
      },
      {
        title: 'Kumbaya Tragedy',
        description: 'the ninja turtles got me running away and attacked so i got my light saber and fought hard. lorem ipsum is dreaming of going to space to see monkey pie ghost and the moon people dancing like canivores on the other isde of the ocean we shall see heaven shining like a new mace mantle on the order of new changes i love code come on.',
        date: new Date,
        category: 'Ninja Turtle Dreams',
        tags: ['creepy', 'moon', 'pluto', 'scary']
      }
    ]

    //save samples to local storage
    localStorage.setItem('dreams', JSON.stringify(this.dreams))
  }

  editDream(dream: Dream) {
  
  }

  getDreams(){
    this.dreams = this.local.getDreams()
  }

  searchDream(filter:string) {
    return this.dreams.filter(dreams=>{
      return dreams.category == filter;
    })
  }

  addDream() {
    this.local.presentModal(AddDream);
  }

  ionViewDidLoad(){
    this.getDreams()
  }

}
