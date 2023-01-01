import { Component, OnInit } from '@angular/core';
import { Announce } from 'src/app/models/announce.model';
import { AnnounceService } from 'src/app/services/announce.service';

@Component({
  selector: 'app-announce',
  templateUrl: './announce.component.html',
  styleUrls: ['./announce.component.css']
})
export class AnnounceComponent implements OnInit {

  annonces: Announce[] = [];
  constructor(private annonceSer: AnnounceService) { }

  ngOnInit(): void {
    this.annonceSer.getAnnonces().subscribe({
      next: (data)=>{
        this.annonces = data;
      },
      error: (err)=>{
        console.log(err);
        
      }
    })
  }

}
