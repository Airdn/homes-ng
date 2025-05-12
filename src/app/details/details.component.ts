import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService} from '../housing.service';
import { Housinglocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  template: `
    <article>
      <img class="listing-photo" [src]="housingLocation?.photo">
      <section class="listing-description">
        <h2 class="listing-heading">{{housingLocation?.name}}</h2>
        <p class="listing-location">{{housingLocation?.city}}</p>
      </section>
      <section class="listing-features" aria-labelledby="features-heading">
        <h2 id="features-heading" class="section-heading">Об этом жилом комплексе</h2>
        <ul role="list">
          <li role="listitem">Метро: {{housingLocation?.metro}}</li>
          <li role="listitem">Количество человек: {{housingLocation?.availableUnits}}</li>
          <li role="listitem">Вайфай: {{housingLocation?.wifi ? 'Есть' : 'Отсутствует'}}</li>
          <li role="listitem">Санузел: {{housingLocation?.laundry ? 'Есть' : 'Отсутствует'}}</li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading">Подайте заявку сейчас, чтобы жить здесь</h2>
        
        <div class="listing-apply-form-container">
          <form [formGroup]="applyForm" (submit)="submitApplication()" aria-label="Форма подачи заявки">
            <label for="first-name">Имя</label>
            <input id="first-name" type="text" formControlName="firstName" aria-required="true">
            <label for="last-name">Фамилия</label>
            <input id="last-name" type="text" formControlName="lastName">
            <label for="email">Почта</label>
            <input id="email" type="email" formControlName="email">
            <button type="submit" class="submit-btn" aria-label="Подтвердить заявку">Подтвердить</button>
          </form>
        </div>
        
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: Housinglocation | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingService.getHousingLocationById(housingLocationId).then(housingLocation => {
      this.housingLocation = housingLocation;
    });
  }

  submitApplication() {
    this.housingService.submitApplication(
        this.applyForm.value.firstName ?? '',
        this.applyForm.value.lastName ?? '',
        this.applyForm.value.email ?? '',
    )
  }
}
