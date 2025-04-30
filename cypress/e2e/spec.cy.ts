describe('Home Page', () => {
  it('отображается главная страница', () => {
    cy.visit('/');
  });
  it('отображается название вкладки', () => {
    cy.visit('/');
    cy.title().should('eq', 'Home Page');
  });
  it('кнопка поиска существует в DOM', () => {
    cy.visit('/');
    cy.get('button').contains('Поиск');
  });
  it('кнопка поиска должна быть видимой на странице', () => {
    cy.visit('/');
    cy.get('button').contains('Поиск').should('be.visible');
  });
  it('отображается хэдер, строка поиска и кнопка поиска', () => {
    cy.visit('/');
    cy.get('header').should('exist');
    cy.get('header').should('be.visible');
    cy.get('app-root').should('be.visible');
    cy.get('app-input-clear').should('be.visible');
    cy.get('button').contains('Поиск').should('exist');
  });
  it('должна отображаться хотя бы одна карточка', () => {
    cy.visit('/');
    cy.get('.listing').should('have.length.greaterThan', 0);
  });
  it('должно отображаться 11 карточек', () => {
    cy.visit('/');
    cy.get('.listing').should('have.length', 11);
  });
  it('проверка отображения карточки', () => {
    cy.visit('/');
    cy.get('section.listing').should('have.length.greaterThan', 0);
    cy.get('section.listing').first().within(() => {
      cy.get('img.listing-photo').should('be.visible');
      cy.get('h2.listing-heading').should('be.visible');
    });
  });
  it('по клику на карточку происходит переход на страницу деталей', () => {
    cy.visit('/');
    cy.get('section.listing').should('have.length.greaterThan', 0);
    cy.get('section.listing').first().click();
    cy.url().should('include', '/details/');
  });
});

describe('Проверка отображения кнопки Поиск', () => {
  it('кнопка "Поиск" отображается на странице', () => {
    cy.visit('/');
    cy.get('.search-btn').should('be.visible');
  });
  it('проверка стилей кнопки "Поиск"', () => {
    cy.visit('/');
    cy.get('.search-btn').should('have.css', 'padding', '10px');
    cy.get('.search-btn').should('have.css', 'border-radius', '8px');
    cy.get('.search-btn').should('have.css', 'margin-left', '4px');
    cy.get('.search-btn').should('have.css', 'background-color', 'rgb(96, 93, 200)');
    cy.get('.search-btn').should('have.css', 'border-color', 'rgb(96, 93, 200)');
    cy.get('.search-btn').should('have.css', 'border-style', 'solid');
    cy.get('.search-btn').should('have.css', 'border-width', '0.666667px');
  });
  // it('проверка отображения hover при наведении', () => {
  //   cy.visit('/');
  //   // cy.get('.search-btn').trigger('mouseover');
  //   cy.get('.search-btn').should('have.css', 'background-color', 'rgb(78, 75, 155)');
  // });
  // it('изменяет фон при нажатии', () => {
  //   cy.visit('/');
  //   cy.get('.search-btn').trigger('mousedown').should('have.css', 'background-color', 'rgb(62, 58, 125)');
  // });
  // it('кнопка "Поиск" доступна для использования', () => {
  //   cy.get('button').contains('Поиск')
  //       .should('have.attr', 'aria-label', 'Искать')
  //       .and('not.be.disabled');
  // });
  // it('кнопка "Поиск" имеет правильные стили', () => {
  //   cy.get('button').contains('Поиск')
  //       .should('have.css', 'background-color', 'rgb(0, 123, 255)')  // проверка цвета фона
  //       .and('have.css', 'color', 'rgb(255, 255, 255)')  // проверка цвета текста
  //       .and('have.css', 'font-size', '16px');  // проверка размера шрифта
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