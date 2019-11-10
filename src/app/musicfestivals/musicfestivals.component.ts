import { Component, OnInit } from '@angular/core';
import { MusicmanagerService } from "../service/musicmanager.service";

@Component({
  selector: 'app-musicfestivals',
  templateUrl: './musicfestivals.component.html',
  styleUrls: ['./musicfestivals.component.css']
})
export class MusicfestivalsComponent implements OnInit {
  location = "india";
  festivals:any=[];

  constructor(
    public mservice: MusicmanagerService
  ) { }

  ngOnInit() {
    this.loadMusicFestivalsResponse();
  }

  loadMusicFestivalsResponse() {
    return this.mservice.loadAllMusicFestivals(this.location).subscribe((data: {}) => {
      this.festivals = data['festivals'];
    })
  }
}
