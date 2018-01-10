import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';

import { AngularFireDatabaseModule } from 'angularfire2/database';

import {SongListPage} from './pages/song-list/song-list';

@NgModule({
    declarations : [
        SongListPage
    ],
    imports:[
        IonicPageModule.forChild(SongListPage),
        AngularFireDatabaseModule,
    ],
    exports:[
        SongListPage
    ]
})
export class SongsModule{}