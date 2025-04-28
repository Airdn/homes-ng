import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing.service';
import { InputClearComponent } from '../input-clear/input-clear.component';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section>
      <form>
        <app-input-clear [(searchText)]="searchText" (clear)="clearFilter()" (keydown.enter)="filterResults($event)"></app-input-clear>
        <button class="search-btn" type="button" (click)="filterResults()">Поиск</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location *ngFor="let housingLocation of filteredLocationList"
        [housingLocation]="housingLocation">
      </app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, HousingLocationComponent, InputClearComponent],
})
export class HomeComponent {
  housingLocationList: Housinglocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: Housinglocation[] = [];
  searchText: string = '';

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: Housinglocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  filterResults(event?: Event) {
    event?.preventDefault();

    if (!this.searchText) {
      this.filteredLocationList = this.housingLocationList;
    } else {
      this.filteredLocationList = this.housingLocationList.filter(
          housingLocation =>
              housingLocation?.city.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

  // Метод очистки фильтра
  clearFilter() {
    this.searchText = '';
    this.filteredLocationList = this.housingLocationList;
  }
}





// Без отдельного компонента InputClearComponent
// import { Component, inject } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { HousingLocationComponent} from '../housing-location/housing-location.component';
// import { Housinglocation } from '../housinglocation';
// import { HousingService } from '../housing.service';
//
// @Component({
//   selector: 'app-home',
//   standalone: true,
//   template: `
//     <section>
//       <form>
//         <input type="search" placeholder="Поиск по городу" #filter/>
//         <button class="search-btn" type="button" (click)="filterResults(filter.value)">Поиск</button>
//       </form>
//     </section>
//     <section class="results">
//       <app-housing-location *ngFor="let housingLocation of filteredLocationList"
//       [housingLocation]="housingLocation"
//       ></app-housing-location>
//     </section>
//   `,
//   styleUrls: ['./home.component.css'],
//   imports: [CommonModule, HousingLocationComponent],
// })
// export class HomeComponent {
//   housingLocationList: Housinglocation[] = [];
//   housingService: HousingService = inject(HousingService);
//   filteredLocationList: Housinglocation[] = [];
//
//   constructor() {
//     this.housingService.getAllHousingLocations().then((housingLocationList: Housinglocation[]) => {
//       this.housingLocationList = housingLocationList;
//       this.filteredLocationList = housingLocationList;
//     });
//   }
//
//   filterResults(text: string) {
//     if (!text) this.filteredLocationList = this.housingLocationList;
//
//     this.filteredLocationList = this.filteredLocationList.filter(
//         housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
//     );
//   }
//
// }