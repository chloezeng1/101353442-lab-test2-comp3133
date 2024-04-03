// src/app/mission-list/mission-list.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mission } from '../models/mission';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})
export class MissionListComponent implements OnInit {
  missions: Mission[] = [];
  filterYear: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.getLaunches(); 
  }

  getLaunches(): void {
    let url = 'https://api.spacexdata.com/v3/launches';
    if (this.filterYear) {
      url += `?launch_year=${this.filterYear}`;
    }

    this.http.get<Mission[]>(url)
      .subscribe(data => {
        this.missions = data; 
      }, error => {
        console.error('There was an error fetching the launches:', error);
      });
  }

  onYearChange(): void {
    this.getLaunches(); 
  }

  viewMissionDetails(flightNumber: string): void {
    this.router.navigate(['/mission-details', flightNumber]); // Navigate to the mission-details route with flightNumber as a parameter
  }
}
