import { getSearchButton, getSearchInput, checkFilteredResults } from './helpers';
import { getButton, buttonHover } from "./helpers";


// describe('Home Page', () => {
//   beforeEach(() => {
//     cy.visit('/');
//   });

//   it('отображается главная страница', () => {
//     cy.visit('/');
//   });
//   it('отображается название вкладки', () => {
//     cy.visit('/');
//     cy.title().should('eq', 'Home Page');
//   });
//   it('кнопка поиска существует в DOM', () => {
//     cy.visit('/');
//     cy.get('button').contains('Поиск');
//   });
//   it('кнопка поиска должна быть видимой на странице', () => {
//     cy.visit('/');
//     cy.get('button').contains('Поиск').should('be.visible');
//   });
//   it('отображается хэдер, строка поиска и кнопка поиска', () => {
//     cy.visit('/');
//     cy.get('header').should('exist');
//     cy.get('header').should('be.visible');
//     cy.get('app-root').should('be.visible');
//     cy.get('app-input-clear').should('be.visible');
//     cy.get('button').contains('Поиск').should('exist');
//   });
//   it('должна отображаться хотя бы одна карточка', () => {
//     cy.visit('/');
//     cy.get('.listing').should('have.length.greaterThan', 0);
//   });
//   it('должно отображаться 11 карточек', () => {
//     cy.visit('/');
//     cy.get('.listing').should('have.length', 11);
//   });
//   it('проверка отображения карточки', () => {
//     cy.visit('/');
//     cy.get('section.listing').should('have.length.greaterThan', 0);
//     cy.get('section.listing').first().within(() => {
//       cy.get('img.listing-photo').should('be.visible');
//       cy.get('h2.listing-heading').should('be.visible');
//     });
//   });
//   it('по клику на карточку происходит переход на страницу деталей', () => {
//     cy.visit('/');
//     cy.get('section.listing').should('have.length.greaterThan', 0);
//     cy.get('section.listing').first().click();
//     cy.url().should('include', '/details/');
//   });
//   it('отображается логотип (img > class)', () => {
//     cy.visit('/');
//     cy.get('img.brand-logo').should('be.visible');
//   });
//   it('отображается логотип (class)', () => {
//     cy.visit('/');
//     cy.get('.brand-logo').should('be.visible');
//   });
//   it('переход на главную страницу по клику на логотип', () => {
//     cy.visit('/');
//     cy.get('.brand-logo').should('be.visible');
//     cy.get('.brand-logo').click();
//     cy.url().should('eq', 'https://homes-ng-aqz8.onrender.com/');
//   });
// });

describe('Проверка отображения кнопки Поиск', () => {
  // it('кнопка "Поиск" отображается на странице', () => {
  //   cy.visit('/');
  //   cy.get('.search-btn').should('be.visible');
  // });
  // it('кнопка "Поиск" доступна для использования', () => {
  //   cy.visit('/');
  //   cy.get('.search-btn').contains('Поиск').and('not.be.disabled');
  // });
  // it('проверка стилей кнопки "Поиск"', () => {
  //   cy.visit('/');
  //   cy.get('.search-btn').should('have.css', 'padding', '10px');
  //   cy.get('.search-btn').should('have.css', 'border-radius', '8px');
  //   cy.get('.search-btn').should('have.css', 'margin-left', '4px');
  //   cy.get('.search-btn').should('have.css', 'background-color', 'rgb(96, 93, 200)');
  //   cy.get('.search-btn').should('have.css', 'border-color', 'rgb(96, 93, 200)');
  //   cy.get('.search-btn').should('have.css', 'border-style', 'solid');
  //   cy.get('.search-btn').should('have.css', 'border-width', '0.666667px');
  // });
  it('состояние Default', () => {
    cy.visit('/');
    cy.get('.search-btn').should('have.css', 'background-color', 'rgb(96, 93, 200)');
  });
  it('состояние Hover', () => {
    cy.visit('/');
    cy.get('.search-btn').should('have.css', 'background-color', 'rgb(96, 93, 200)');
    cy.get('.search-btn').invoke('addClass', 'hover');
    cy.get('.search-btn').should('have.css', 'background-color', 'rgb(78, 75, 155)');
  });

  it('состояние Hover', () => {
    cy.visit('/');
    buttonHover().wait(500);
  });
    // cy.get('.search-btn').trigger('mousedown');

    // getButton().realHover().wait(1000);
    // cy.get('.search-btn').should('have.css', 'background-color', 'rgb(78, 75, 155)');
    // buttonHover().wait(500);
    // cy.get('.search-btn').should('have.css', 'background-color', 'rgb(78, 75, 155)');

    // getButton().realHover().wait(1000);


  it('hover работает', () => {
    cy.visit('/');
    cy.get('.search-btn').realHover(); // ← напрямую
  });

  //
  // it('состояние Hover', () => {
  //   buttonHover();
  //   const { color, background } = fixture.colors.default.primary.hover;
  //
  //   innerButton().should('have.css', 'background-color', background).should('have.css', 'color', color);
  // });

});

// describe('Details Page', () => {
//   it('должна загрузиться страница и содержать название вкладки', () => {
//     cy.visit('/');
//     cy.title().should('eq', 'Home Page');
//   });
//   it('отображается кнопка поиска', () => {
//     cy.visit('/');
//     cy.get('button').contains('Поиск');
//   });
// });

// async
// await