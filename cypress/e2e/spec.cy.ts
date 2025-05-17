/// <reference types="cypress" />
import 'cypress-real-events/support';
import { hoverButton, pressedButton } from "./helpers";

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
//     cy.url().should('eq', Cypress.config().baseUrl);
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
//     hoverButton();
//     cy.get('.search-btn').should('have.css', 'background-color', 'rgb(78, 75, 155)');
//   });
//
//   it('состояние Pressed', () => {
//     pressedButton();
//     cy.get('.search-btn').should('have.css', 'background-color', 'rgb(62, 58, 125)');
//   });
// });

describe('Details Page', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.get('section.listing').should('exist').first().click();
  });

  // it('клик по карточке открывает и загружает Details Page', () => {
  //   cy.url().should('include', '/details/');
  // });
  //
  // it('отображается название вкладки', () => {
  //   cy.title().should('eq', 'Details Page');
  // });
  //
  // it('проверка отображения всего контента на Details Page', () => {
  //   cy.get('header').should('be.visible');
  //   cy.get('section.content').should('be.visible');
  //   cy.get('app-details').should('be.visible');
  //   cy.get('img.listing-photo').should('be.visible');
  //   cy.get('section.listing-description').should('be.visible');
  //   cy.get('section.listing-features').should('be.visible');
  //   cy.get('section.listing-apply').should('be.visible');
  // });
  //
  // it('проверка отображения img', () => {
  //   cy.get('img.listing-photo').should('exist');
  //   cy.get('img.listing-photo').should('be.visible');
  //   cy.get('img.listing-photo').should('have.attr', 'src').and('not.be.empty');
  // });
  //
  // it('проверка отображения img (через expect)', () => {
  //   cy.get('img.listing-photo').should('be.visible').and(($img) => {
  //     expect($img[0].naturalWidth).to.be.greaterThan(0);
  //   });
  // });
  //
  // it('проверка отображения img (через assert)', () => {
  //   cy.get('img.listing-photo').should(($img) => {
  //     assert.isAbove($img[0].naturalWidth, 0, 'изображение не загрузилось');
  //   });
  // });
  //
  // it('проверка отображения description', () => {
  //   cy.get('section.listing-description').should('exist');
  //   cy.get('h2.listing-heading').should('be.visible');
  //   cy.get('h2.listing-heading').should('have.css', 'font-size', '64px');
  //   cy.get('p.listing-location').should('be.visible');
  //   cy.get('p.listing-location').should('have.css', 'font-size', '32px');
  // });
  //
  // it('проверка структуры и стилей description', () => {
  //   cy.get('section.listing-description').should('exist');
  //
  //   // Проверка h2 (через then)
  //   cy.get('h2.listing-heading')
  //       .should('be.visible')
  //       .and('not.be.empty')
  //       .and('have.prop', 'tagName', 'H2')
  //       .then(($el) => {
  //         expect($el).to.have.css('font-size', '64px');
  //         expect($el).to.have.css('font-weight');
  //         expect($el).to.have.css('color');
  //       });
  //
  //   // Проверка h2 (каждого стиля)
  //   cy.get('h2.listing-heading').should('have.css', 'font-size', '64px');
  //   cy.get('h2.listing-heading').should('have.css', 'font-weight');
  //   cy.get('h2.listing-heading').should('have.css', 'color');
  //
  //   // Проверка p (через then)
  //   cy.get('p.listing-location')
  //       .should('be.visible')
  //       .and('not.be.empty')
  //       .and('have.prop', 'tagName', 'P')
  //       .then(($el) => {
  //         expect($el).to.have.css('font-size', '32px');
  //         expect($el).to.have.css('font-weight');
  //         expect($el).to.have.css('color');
  //       });
  //
  //   // Проверка p (каждого стиля)
  //   cy.get('p.listing-location').should('have.css', 'font-size', '32px');
  //   cy.get('p.listing-location').should('have.css', 'font-weight');
  //   cy.get('p.listing-location').should('have.css', 'color');
  // });
  //
  // it('проверка цвета текста h2 и p', () => {
  //   // Проверка цвета h2
  //   cy.get('h2.listing-heading').should('be.visible').then(($el) => {
  //     expect($el).to.have.css('color', 'rgb(0, 0, 0)');
  //   });
  //
  //   // Проверка цвета p
  //   cy.get('p.listing-location').should('be.visible').then(($el) => {
  //     expect($el).to.have.css('color', 'rgb(0, 0, 0)');
  //   });
  // });
  //
  // it('проверка порядка элементов (h2 должен быть перед p)', () => {
  //   // Через within и class + class
  //   cy.get('section.listing-description').within(() => {
  //     cy.get('h2.listing-heading + p.listing-location').should('exist');
  //   });
  //
  //   // Через next()
  //   cy.get('section.listing-description').within(() => {
  //     cy.get('h2.listing-heading')
  //         .should('exist')
  //         .next('p.listing-location')
  //         .should('exist');
  //   });
  // });
  //
  // it('проверка адаптивности (отзывчивости стилей)', () => {
  //   cy.viewport('iphone-x');
  //   cy.get('h2.listing-heading')
  //       .should('have.css', 'font-size')
  //       .and('match', /px$/);
  //   cy.get('h2.listing-heading')
  //       .should('have.css', 'color')
  //       .and('match', /^rgb/);
  // });
  //
  // it('Проверка accessibility (ARIA-атрибутов): Форма заявки должна быть доступной', () => {
  //   // проверка формы
  //   cy.get('form').should('have.attr', 'aria-label', 'Форма подачи заявки');
  //   // инпут, обязательное поле
  //   cy.get('#first-name').should('have.attr', 'aria-required', 'true');
  //   // кнопка
  //   cy.get('.submit-btn').should('have.attr', 'aria-label', 'Подтвердить заявку');
  // });
  //
  // it('Проверка accessibility (ARIA-атрибутов): Список фичей должен быть доступным', () => {
  //   // проверяем связь заголовка и секции
  //   cy.get('section.listing-features').should('have.attr', 'aria-labelledby', 'features-heading');
  //   // проверяем роли списка
  //   cy.get('.listing-features ul').should('have.attr', 'role', 'list');
  //   cy.get('.listing-features li').first().should('have.attr', 'role', 'listitem');
  // });

  it('проверка отображения features', () => {
    cy.get('section.listing-features').should('exist');
    cy.get('section.listing-features h2').should('be.visible');
    cy.get('section.listing-features ul').should('exist');
    cy.get('section.listing-features li').should('have.length', 4).and('be.visible');
  });

  it('проверка количества list item', () => {
    // Проверка, что список не меньше 0 и не больше 4 элементов
    cy.get('section.listing-features li').should('have.length.gt', 0).and('have.length.lt', 5);

    // Другой вариант, через expect
    cy.get('section.listing-features li').should(($li) => {
      expect($li.length).to.be.gt(0).and.lt(5);
    });

    // Другой вариант, через gte и lte
    cy.get('section.listing-features li').its('length').should('be.gte', 1).and('be.lte', 4);
  });

  it('проверка цвета и размера шрифта features', () => {
    cy.get('section.listing-features h2').should('have.css', 'font-size', '32px');
    cy.get('section.listing-features h2').should('have.css', 'color', 'rgb(139, 137, 230)');
    cy.get('section.listing-features h2').should('have.css', 'margin-bottom', '15px');
    cy.get('section.listing-features li').should('have.css', 'font-size', '18px');
  });














  it('проверка отображения apply (форма)', () => {
    cy.get('header').should('be.visible');
    cy.get('section.content').should('be.visible');
    cy.get('app-details').should('be.visible');
  });

  // it('кнопка "Подтвердить" существует в DOM', () => {
  //   cy.get('.submit-btn').should('exist');
  // });
  //
  // it('отображается кнопка "Подтвердить"', () => {
  //   cy.get('.submit-btn').should('be.visible');
  // });
  //
  // it('проверка текста в кнопке "Подтвердить"', () => {
  //   cy.get('.submit-btn').should('be.visible');
  //   cy.get('.submit-btn').contains('Подтвердить');
  // });
});

// async
// await
// отдельно тест exist отдельно visible
// верстка карточки
// забить в поиск и попробовать найти, проверка того что нашло
// cy.get('.submit-btn').should('be.visible');

// проверка что кнопка вызывает функцию???
// const onClick = cy.stub(); cy.mount(<MyButton onClick={onClick} />);
// cy.get('button').click(); cy.wrap(onClick).should('have.been.calledOnce');

// сделать такую проверку в кнопке
// cy.get('h2.listing-heading').should('be.visible').then(($el) => {
//   expect($el).to.have.css('color', 'rgb(0, 0, 0)');
// });

// тест клик по логотипу из карточки перекинет на главную