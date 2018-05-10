import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import * as _ from 'lodash';
import { Dream } from '../interfaces/dream.interface';

@Injectable()

export class DatabaseService {
    ref: any
    constructor(private afDatabase: AngularFireDatabase) {
        this.ref = this.afDatabase.database.ref()
    }

    getUsers(): Promise<any> {
        return new Promise(resolve => {
            this.afDatabase.list('dreams')
                .snapshotChanges()
                .map(changes => {
                    return changes.map(
                        change => ({
                            key: change.key, ...change.payload.val()
                        }))
                }).subscribe(users => {
                    resolve(users)
                })
        })
    }
}