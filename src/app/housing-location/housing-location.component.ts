import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HousingLocation} from '../housinglocation';
import {RouterModule} from '@angular/router';



@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.scss'
})
export class HousingLocationComponent {

  @Input() housingLocation!: HousingLocation;/*The exclamation point
   is called the non-null assertion operator and it tells the 
   TypeScript compiler that the value of 
   this property won't be null or undefined
*/
}
