import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpaceDataService } from '../network/space-xdata.service'; 
import { Mission } from '../models/mission';

@Component({
  selector: 'app-mission-details',
  templateUrl: './mission-details.component.html',
  styleUrls: ['./mission-details.component.css']
})
export class MissionDetailsComponent implements OnInit {
  mission: Mission | undefined;

  constructor(private route: ActivatedRoute, private spaceDataService: SpaceDataService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const flightNumber = params.get('flightNumber');
      if (flightNumber) {
        this.spaceDataService.getMissionById(flightNumber).subscribe((data: Mission) => {
          this.mission = data;
        }, (error: any) => {
          console.error('Error fetching mission details:', error);
        });
      }
    });
  }
}
