import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicfestivalsComponent } from './musicfestivals/musicfestivals.component';


const routes: Routes = [
  { path: 'loadAllMusicFestivals', component: MusicfestivalsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
