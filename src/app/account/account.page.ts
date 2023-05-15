import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Style } from '@capacitor/status-bar';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})


export class AccountPage implements OnInit {
  username: any;
  map: mapboxgl.Map
  mapBoxAPIKey:string = 'pk.eyJ1Ijoiam0wNiIsImEiOiJjbGd2cmptNHkwdDNrM2NrbGdmMHV1dTNmIn0.dbloBcA70UMEIoQca9kGsQ';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username');
  }


}
