import { Component, OnInit } from '@angular/core';
import { MusicmanagerService } from "../service/musicmanager.service";

@Component({
  selector: 'app-musicfestivals',
  templateUrl: './musicfestivals.component.html',
  styleUrls: ['./musicfestivals.component.css']
})
export class MusicfestivalsComponent implements OnInit {
  location = "india";
  MusicFestival: any = [];

  constructor(
    public mservice: MusicmanagerService
  ) { }

  ngOnInit() {
    this.loadMusicFestivals()
  }

  // Get employees list
  loadMusicFestivals() {
    return this.mservice.loadAllMusicFestivals(this.location).subscribe((data: {}) => {
      this.MusicFestival = data;
    })
  }
}
