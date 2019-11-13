import { Component, OnInit } from '@angular/core';
import { MusicmanagerService } from "../service/musicmanager.service";

@Component({
  selector: 'app-musicfestivals',
  templateUrl: './musicfestivals.component.html',
  styleUrls: ['./musicfestivals.component.css']
})
export class MusicfestivalsComponent implements OnInit {
  name = "Casablanca";
  labels:any=[];

  constructor(
    public mservice: MusicmanagerService
  ) { }

  ngOnInit() {
    this.loadMusicFestivalsResponse();
  }

  loadMusicFestivalsResponse() {
    return this.mservice.loadAllMusicFestivals(this.name).subscribe((data: {}) => {
      this.labels = data['labels'];
    })
  }
}
