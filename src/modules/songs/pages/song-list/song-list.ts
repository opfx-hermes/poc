import {Component} from '@angular/core';
import {NavController,AlertController,ActionSheetController} from 'ionic-angular';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
    selector : 'page-song-list',
    templateUrl : 'song-list.html'
})
export class SongListPage {
    flist : AngularFireList<any>;
    songs : Observable<any>;

    constructor(public navCtrl : NavController, private alertCtrl : AlertController, private actionSheetCtrl:ActionSheetController ,db : AngularFireDatabase) {
        this.flist = db.list('/songs');
        this.songs = this.flist.valueChanges();
    }

    

    addSong() {
        // let prompt = this.alertCtrl.create({});
        console.log("adding song");

        let prompt = this.alertCtrl.create({
            title: 'Song Name',
            message: "Enter a name for this new song you're so keen on adding",
            inputs: [
              {
                name: 'title',
                placeholder: 'Title'
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
                  const newSongRef = this.flist.push({});
         
                  newSongRef.set({
                    id: newSongRef.key,
                    title: data.title
                  });
                }
              }
            ]
          });
          prompt.present();
    }

    showDetails(id, title) {
        let actionSheet = this.actionSheetCtrl.create({
            title: 'What do you want to do?',
            buttons: [
              {
                text: 'Delete Song',
                role: 'destructive',
                handler: () => {
                  this.removeSong(id);
                }
              },{
                text: 'Update title',
                handler: () => {
                  this.updateSong(id, title);
                }
              },{
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                  console.log('Cancel clicked');
                }
              }
            ]
          });
          actionSheet.present();
    }


    private removeSong(id) {
        this.flist.remove(id)
    }

    private updateSong(id,title) {
        let prompt = this.alertCtrl.create({
            title: 'Song Name',
            message: "Update the name for this song",
            inputs: [
              {
                name: 'title',
                placeholder: 'Title',
                value: title
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
                  this.flist.update(id, {
                    title: data.title
                  });
                }
              }
            ]
          });
          prompt.present();
        }
    
}