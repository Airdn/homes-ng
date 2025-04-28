import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-clear',
  imports: [FormsModule, CommonModule],
  template: `
    <div class="input-wrapper">
      <input type="text" placeholder="Поиск по городу" [(ngModel)]="searchText" (ngModelChange)="onSearchTextChange($event)" />
      <button class="clear-btn" type="button" *ngIf="searchText" (click)="clearFilter()">&#10005;</button>
    </div>
  `,
  styleUrls: ['./input-clear.component.css']
})
export class InputClearComponent {
  @Input() searchText: string = '';  // Получаем текст из родительского компонента
  @Output() searchTextChange = new EventEmitter<string>(); // Событие для обновления родительского компонента
  @Output() clear = new EventEmitter<void>(); // Событие очистки

  // Этот метод вызывается при изменении значения в поле ввода
  onSearchTextChange(value: string) {
    this.searchTextChange.emit(value);  // Отправляем обновленное значение родителю
  }

  clearFilter() {
    this.searchText = ''; // Очищаем значение
    this.clear.emit(); // Отправляем событие очистки
    this.searchTextChange.emit(''); // Очищаем значение через emit
  }
}
