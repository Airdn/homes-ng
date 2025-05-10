import 'cypress-real-events/support';
import { buttonHover, buttonPressed } from "./helpers";

// describe('Home Page', () => {
//
//   beforeEach(() => {
//     cy.visit('/');
//   });
//
//   it('отображается главная страница', () => {
//     cy.visit('/');
//   });
//
//   it('отображается название вкладки', () => {
//     cy.title().should('eq', 'Home Page');
//   });
//
//   it('кнопка поиска существует в DOM', () => {
//     cy.get('button').contains('Поиск');
//   });
//
//   it('кнопка поиска должна быть видимой на странице', () => {
//     cy.get('button').contains('Поиск').should('be.visible');
//   });
//
//   it('отображается хэдер, строка поиска и кнопка поиска', () => {
//     cy.get('header').should('exist');
//     cy.get('header').should('be.visible');
//     cy.get('app-root').should('be.visible');
//     cy.get('app-input-clear').should('be.visible');
//     cy.get('button').contains('Поиск').should('exist');
//   });
//
//   it('должна отображаться хотя бы одна карточка', () => {
//     cy.get('.listing').should('have.length.greaterThan', 0);
//   });
//
//   it('должно отображаться 11 карточек', () => {
//     cy.get('.listing').should('have.length', 11);
//   });
//
//   it('проверка отображения карточки', () => {
//     cy.get('section.listing').should('have.length.greaterThan', 0);
//     cy.get('section.listing').first().within(() => {
//       cy.get('img.listing-photo').should('be.visible');
//       cy.get('h2.listing-heading').should('be.visible');
//     });
//   });
//
//   it('по клику на карточку происходит переход на страницу деталей', () => {
//     cy.get('section.listing').should('have.length.greaterThan', 0);
//     cy.get('section.listing').first().click();
//     cy.url().should('include', '/details/');
//   });
//
//   it('отображается логотип (img > class)', () => {
//     cy.get('img.brand-logo').should('be.visible');
//   });
//
//   it('отображается логотип (class)', () => {
//     cy.get('.brand-logo').should('be.visible');
//   });
//
//   it('переход на главную страницу по клику на логотип', () => {
//     cy.get('.brand-logo').should('be.visible');
//     cy.get('.brand-logo').click();
//     cy.url().should('eq', 'https://homes-ng-aqz8.onrender.com/');
//   });
// });
//
// describe('Проверка отображения кнопки Поиск', () => {
//
//   beforeEach(() => {
//     cy.visit('/');
//   });
//
//   it('отображается кнопка "Поиск"', () => {
//     cy.get('.search-btn').should('be.visible');
//   });
//
//   it('проверка текста в кнопке "Поиск"', () => {
//     cy.get('.search-btn').should('be.visible');
//     cy.get('.search-btn').contains('Поиск');
//   });
//
//   it('кнопка "Поиск" доступна для использования', () => {
//     cy.get('.search-btn').contains('Поиск').and('not.be.disabled');
//   });
//
//   it('проверка стилей кнопки "Поиск"', () => {
//     cy.get('.search-btn').should('have.css', 'padding', '10px');
//     cy.get('.search-btn').should('have.css', 'border-radius', '8px');
//     cy.get('.search-btn').should('have.css', 'margin-left', '4px');
//     cy.get('.search-btn').should('have.css', 'background-color', 'rgb(96, 93, 200)');
//     cy.get('.search-btn').should('have.css', 'border-color', 'rgb(96, 93, 200)');
//     cy.get('.search-btn').should('have.css', 'border-style', 'solid');
//     cy.get('.search-btn').should('have.css', 'border-width', '0.666667px');
//   });
//
//   it('состояние Default', () => {
//     cy.get('.search-btn').should('have.css', 'background-color', 'rgb(96, 93, 200)');
//   });
//
//   // it('состояние Hover', () => {
//   //   cy.get('.search-btn').should('have.css', 'background-color', 'rgb(96, 93, 200)');
//   //   cy.get('.search-btn').realHover();
//   //   cy.get('.search-btn').should('have.css', 'background-color', 'rgb(78, 75, 155)');
//   //   cy.get('.search-btn').invoke('addClass', 'hover');
//   //   cy.get('.search-btn').should('have.class', 'hover');
//   // });
//
//   it('состояние Hover', () => {
//     buttonHover();
//     cy.get('.search-btn').should('have.css', 'background-color', 'rgb(78, 75, 155)');
//   });
//
//   it('состояние Pressed', () => {
//     buttonPressed();
//     cy.get('.search-btn').should('have.css', 'background-color', 'rgb(62, 58, 125)');
//   });
// });

describe('Details Page', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.get('section.listing').should('exist').first().click();
  });

  it('клик по карточке открывает Details Page', () => {
    cy.url().should('include', '/details/');
    cy.get('header').should('be.visible');
    cy.get('app-details').should('be.visible');
  });

  it('отображается название вкладки Details Page', () => {
    cy.title().should('eq', 'Details Page');
  });

  it('отображается кнопка "Подтвердить"', () => {
    cy.get('.submit-btn').should('be.visible');
  });

  it('проверка текста в кнопке "Подтвердить"', () => {
    cy.get('.submit-btn').should('be.visible');
    cy.get('.submit-btn').contains('Подтвердить');
  });

  it('проверка отображения содержимого Details Page', () => {
    cy.get('header').should('be.visible');
    cy.get('section.content').should('be.visible');
    cy.get('app-details').should('be.visible');
    cy.get('img.listing-photo').should('be.visible');
  });

  it('проверка отображения содержимого Details Page', () => {
    cy.get('header').should('be.visible');
    cy.get('section.content').should('be.visible');
    cy.get('app-details').should('be.visible');

    cy.get('img.listing-photo').should('be.visible');
  });

  it('проверка отображения содержимого Details Page', () => {
    cy.get('header').should('be.visible');
    cy.get('section.content').should('be.visible');
    cy.get('app-details').should('be.visible');

    cy.get('section.listing-description').should('be.visible');
    cy.get('h2.listing-heading').should('be.visible');
    cy.get('h2.listing-heading').should('have.css', 'font-size', '64px');
    cy.get('p.listing-location').should('be.visible');
    cy.get('p.listing-location').should('have.css', 'font-size', '32px');
  });
});

// async
// await
// верстка карточки
// забить в поиск и попробовать найти, проверка того что нашло
//     cy.get('.submit-btn').should('be.visible');