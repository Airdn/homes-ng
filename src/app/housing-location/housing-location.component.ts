import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  template: `
    <section class="listing" [routerLink]="['/details', housingLocation.id]">
      <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
      <h2 class="listing-heading">{{housingLocation.name}}</h2>
      <p class="listing-location">{{housingLocation.city}}, м. {{housingLocation.metro}}</p>
    </section>
  `,
  styleUrls: ['./housing-location.component.css'],
  imports: [CommonModule, RouterModule]
})
export class HousingLocationComponent {
  @Input() housingLocation!: Housinglocation;
}
