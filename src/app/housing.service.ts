import { Injectable } from '@angular/core';
import { Housinglocation } from "./housinglocation";

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = 'https://raw.githubusercontent.com/Airdn/homes-ng/refs/heads/main/db.json';
  // url = 'http://localhost:3000/location';

  constructor() { }

  async getAllHousingLocations() : Promise<Housinglocation[]> {
    // const data = await fetch(this.url);
    // return await data.json() ?? [];
    const data = await fetch(this.url);
    const jsonResponse = await data.json();
    return jsonResponse.location ?? [];
  }

  async getHousingLocationById(id: Number): Promise<Housinglocation | undefined> {
    // const data = await fetch(`${this.url}/${id}`);
    // return await data.json() ?? {};
    const data = await fetch(this.url);
    const jsonResponse = await data.json();

    // Находим нужную карточку по id из массива location
    const location = jsonResponse.location.find((item: Housinglocation) => item.id === id);
    // Возвращаем найденную карточку или undefined, если не найдено
    return location ?? undefined;
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
