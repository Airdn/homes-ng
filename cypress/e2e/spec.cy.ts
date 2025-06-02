/// <reference types="cypress" />
import 'cypress-real-events/support';
import {
  BUTTON_STATES,
  buttonHover,
  buttonPressed,
  formFields,
  assertBorderWidthInRange,
  listingApplySectionTitle,
} from "./helpers";

describe('Home Page', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('отображается главная страница', () => {
    cy.visit('/');
  });

  it('отображается название вкладки', () => {
    cy.title().should('eq', 'Home Page');
  });

  it('кнопка поиска существует в DOM', () => {
    cy.get('button').contains('Поиск');
  });

  it('кнопка поиска должна быть видимой на странице', () => {
    cy.get('button').contains('Поиск').should('be.visible');
  });

  it('отображается хэдер, строка поиска и кнопка поиска', () => {
    cy.get('header').should('exist');
    cy.get('header').should('be.visible');
    cy.get('app-root').should('be.visible');
    cy.get('app-input-clear').should('be.visible');
    cy.get('button').contains('Поиск').should('exist');
  });

  it('должна отображаться хотя бы одна карточка', () => {
    cy.get('.listing').should('have.length.greaterThan', 0);
  });

  it('должно отображаться 11 карточек', () => {
    cy.get('.listing').should('have.length', 11);
  });

  it('проверка отображения карточки', () => {
    cy.get('section.listing').should('have.length.greaterThan', 0);
    cy.get('section.listing').first().within(() => {
      cy.get('img.listing-photo').should('be.visible');
      cy.get('h2.listing-heading').should('be.visible');
    });
  });

  it('по клику на карточку происходит переход на страницу деталей', () => {
    cy.get('section.listing').should('have.length.greaterThan', 0);
    cy.get('section.listing').first().click();
    cy.url().should('include', '/details/');
  });

  it('отображается логотип (img > class)', () => {
    cy.get('img.brand-logo').should('be.visible');
  });

  it('отображается логотип (class)', () => {
    cy.get('.brand-logo').should('be.visible');
  });

  it('переход на главную страницу по клику на логотип', () => {
    cy.get('.brand-logo').should('be.visible');
    cy.get('.brand-logo').click();
    cy.url().should('eq', Cypress.config().baseUrl);
  });
});

describe('Проверка отображения кнопки Поиск', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('отображается кнопка "Поиск"', () => {
    cy.get('.search-btn').should('be.visible');
  });

  it('проверка текста в кнопке "Поиск"', () => {
    cy.get('.search-btn').should('be.visible');
    cy.get('.search-btn').contains('Поиск');
  });

  it('кнопка "Поиск" доступна для использования', () => {
    cy.get('.search-btn').contains('Поиск').and('not.be.disabled');
  });

  it('проверка стилей кнопки "Поиск"', () => {
    cy.get('.search-btn').should('have.css', 'padding', '10px');
    cy.get('.search-btn').should('have.css', 'border-radius', '8px');
    cy.get('.search-btn').should('have.css', 'margin-left', '4px');
    cy.get('.search-btn').should('have.css', 'background-color', 'rgb(96, 93, 200)');
    cy.get('.search-btn').should('have.css', 'border-color', 'rgb(96, 93, 200)');
    cy.get('.search-btn').should('have.css', 'border-style', 'solid')
    .then(($btn) => {
        // Проверка border-width с погрешностью 0.5px
        const borderWidth = parseFloat(window.getComputedStyle($btn[0]).borderWidth);
        expect(borderWidth).to.be.closeTo(1, 0.5);
      });
  });

  it('состояние Default', () => {
    cy.get('.search-btn').should('have.css', 'background-color', 'rgb(96, 93, 200)');
  });

  it('состояние Hover', () => {
    buttonHover('button.search-btn');
  });

  it('состояние Pressed', () => {
    buttonPressed('button.search-btn');
  });
});

describe('Details Page', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.get('section.listing').should('exist').first().click();
  });

  it('клик по карточке открывает и загружает Details Page', () => {
    cy.url().should('include', '/details/');
  });

  it('отображается название вкладки', () => {
    cy.title().should('eq', 'Details Page');
  });

  it('проверка отображения всего контента на Details Page', () => {
    cy.get('header').should('be.visible');
    cy.get('section.content').should('be.visible');
    cy.get('app-details').should('be.visible');
    cy.get('img.listing-photo').should('be.visible');
    cy.get('section.listing-description').should('be.visible');
    cy.get('section.listing-features').should('be.visible');
    cy.get('section.listing-apply').should('be.visible');
  });

  it('проверка отображения img', () => {
    cy.get('img.listing-photo').should('exist');
    cy.get('img.listing-photo').should('be.visible');
    cy.get('img.listing-photo').should('have.attr', 'src').and('not.be.empty');
  });

  it('проверка отображения img (через expect)', () => {
    cy.get('img.listing-photo').should('be.visible').and(($img) => {
      expect($img[0].naturalWidth).to.be.greaterThan(0);
    });
  });

  it('проверка отображения img (через assert)', () => {
    cy.get('img.listing-photo').should(($img) => {
      assert.isAbove($img[0].naturalWidth, 0, 'изображение не загрузилось');
    });
  });

  it('проверка отображения description', () => {
    cy.get('section.listing-description').should('exist');
    cy.get('h2.listing-heading').should('be.visible');
    cy.get('h2.listing-heading').should('have.css', 'font-size', '64px');
    cy.get('p.listing-location').should('be.visible');
    cy.get('p.listing-location').should('have.css', 'font-size', '32px');
  });

  it('проверка структуры и стилей description', () => {
    cy.get('section.listing-description').should('exist');

    // Проверка h2 (через then)
    cy.get('h2.listing-heading')
        .should('be.visible')
        .and('not.be.empty')
        .and('have.prop', 'tagName', 'H2')
        .then(($el) => {
          expect($el).to.have.css('font-size', '64px');
          expect($el).to.have.css('font-weight');
          expect($el).to.have.css('color');
        });

    // Проверка h2 (каждого стиля)
    cy.get('h2.listing-heading').should('have.css', 'font-size', '64px');
    cy.get('h2.listing-heading').should('have.css', 'font-weight');
    cy.get('h2.listing-heading').should('have.css', 'color');

    // Проверка p (через then)
    cy.get('p.listing-location')
        .should('be.visible')
        .and('not.be.empty')
        .and('have.prop', 'tagName', 'P')
        .then(($el) => {
          expect($el).to.have.css('font-size', '32px');
          expect($el).to.have.css('font-weight');
          expect($el).to.have.css('color');
        });

    // Проверка p (каждого стиля)
    cy.get('p.listing-location').should('have.css', 'font-size', '32px');
    cy.get('p.listing-location').should('have.css', 'font-weight');
    cy.get('p.listing-location').should('have.css', 'color');
  });

  it('проверка цвета текста h2 и p', () => {
    // Проверка цвета h2
    cy.get('h2.listing-heading').should('be.visible').then(($el) => {
      expect($el).to.have.css('color', 'rgb(0, 0, 0)');
    });

    // Проверка цвета p
    cy.get('p.listing-location').should('be.visible').then(($el) => {
      expect($el).to.have.css('color', 'rgb(0, 0, 0)');
    });
  });

  it('проверка порядка элементов (h2 должен быть перед p)', () => {
    // Через within и class + class
    cy.get('section.listing-description').within(() => {
      cy.get('h2.listing-heading + p.listing-location').should('exist');
    });

    // Через next()
    cy.get('section.listing-description').within(() => {
      cy.get('h2.listing-heading')
          .should('exist')
          .next('p.listing-location')
          .should('exist');
    });
  });

  it('проверка адаптивности (отзывчивости стилей)', () => {
    cy.viewport('iphone-x');
    cy.get('h2.listing-heading')
        .should('have.css', 'font-size')
        .and('match', /px$/);
    cy.get('h2.listing-heading')
        .should('have.css', 'color')
        .and('match', /^rgb/);
  });

  it('Проверка accessibility (ARIA-атрибутов): Форма заявки должна быть доступной', () => {
    // проверка формы
    cy.get('form').should('have.attr', 'aria-label', 'Форма подачи заявки');
    // инпут, обязательное поле
    cy.get('#first-name').should('have.attr', 'aria-required', 'true');
    // кнопка
    cy.get('.submit-btn').should('have.attr', 'aria-label', 'Подтвердить заявку');
  });

  it('Проверка accessibility (ARIA-атрибутов): Список фичей должен быть доступным', () => {
    // проверяем связь заголовка и секции
    cy.get('section.listing-features').should('have.attr', 'aria-labelledby', 'features-heading');
    // проверяем роли списка
    cy.get('.listing-features ul').should('have.attr', 'role', 'list');
    cy.get('.listing-features li').first().should('have.attr', 'role', 'listitem');
  });

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

  it('проверка цвета и размера шрифта h2 и li', () => {
    cy.get('section.listing-features h2').should('have.css', 'font-size', '32px');
    cy.get('section.listing-features h2').should('have.css', 'color', 'rgb(139, 137, 230)');
    cy.get('section.listing-features h2').should('have.css', 'margin-bottom', '15px');
    cy.get('section.listing-features li').should('have.css', 'font-size', '18px');

    // Проверка размера во всех li через each
    cy.get('section.listing-features li').each(($li) => {
      cy.wrap($li).should('have.css', 'font-size', '18px');
    });
  });

  it('альтренативная проверка размера и шрифта h2 и li через then', () => {
    cy.get('section.listing-features li').then(($items: JQuery<HTMLLIElement>) => {
      // Проверяем количество элементов
      expect($items.length).to.equal(4);

      // Проверяем font-size для каждого элемента, нижнее подчеркивание - параметр не используется
      $items.each((_, element: HTMLLIElement) => {
        const computedStyle = window.getComputedStyle(element);
        expect(computedStyle.fontSize).to.equal('18px');
      });
    });
  });

  it('проверка наличия margin-top у секции features', () => {
    cy.get('section.listing-features').should('have.css', 'margin-bottom', '20px');
  });

  it('дополнительная проверка стилей h2 и li', () => {
    cy.get('section.listing-features').should('exist');
    cy.get('section.listing-features h2')
        .should('be.visible')
        .and('not.be.empty')
        .and('have.prop', 'tagName', 'H2')
        .then(($el) => {
          expect($el).to.have.css('font-size', '32px');
          expect($el).to.have.css('font-weight', '700');
          expect($el).to.have.css('color', 'rgb(139, 137, 230)');
          expect($el).to.have.css('margin-bottom', '15px');
        });

    cy.get('section.listing-features h2').should('have.css', 'font-size', '32px');
    cy.get('section.listing-features h2').should('have.css', 'font-weight', '700');
    cy.get('section.listing-features h2').should('have.css', 'color', 'rgb(139, 137, 230)');
    cy.get('section.listing-features h2').should('have.css', 'margin-bottom', '15px');

    cy.get('section.listing-features li')
        .should('have.length.gte', 1)
        .each(($li) => {
          cy.wrap($li)
              .should('be.visible')
              .and('have.prop', 'tagName', 'LI')
              .and('have.css', 'font-size', '18px')
              .and('have.css', 'color', 'rgb(0, 0, 0)');
        });
  });

  it('проверка цвета текста h2 и p (cy.get, each, each + cy.wrap)', () => {
    cy.get('section.listing-features h2').should('be.visible').and('have.css', 'color', 'rgb(139, 137, 230)');

    // each (перебирает все li, проверяет через expect)
    cy.get('section.listing-features li')
        .should('be.visible')
        .each(($li) => {
          expect($li).to.have.css('color', 'rgb(0, 0, 0)');
        });

    // each + wrap (перебирает все li, wrap дает проверять через should)
    cy.get('section.listing-features li')
        .should('be.visible')
        .each(($li) => {
          cy.wrap($li)
              .should('have.css', 'color', 'rgb(0, 0, 0)');
        });
  });

  it('проверка порядка элементов h2 > ul > li', () => {
    // 1 вариант, next и find
    cy.get('section.listing-features').within(() => {
      cy.get('h2')
          .should('exist')
          .next('ul')
          .should('exist')
          .find('li:first') // first, так как избыточно проверять все li
          .should('exist');
    });

    // 2 варинт, полная проверка порядка h2 → ul → li
    cy.get('section.listing-features').within(() => {
      cy.get('h2').should('exist');
      cy.get('h2 + ul').should('exist');
      cy.get('h2 + ul > li').should('have.length.gt', 0);
    });
  });

  it('проверка текста внутри h2 и каждого li', () => {
    cy.get('section.listing-features').should('exist');

    cy.get('section.listing-features h2').should('have.text', 'Об этом жилом комплексе');

    // через li:nth-child()
    cy.get('section.listing-features li:nth-child(1)').should('contain.text', 'Метро:');
    cy.get('section.listing-features li:nth-child(2)').should('contain.text', 'Количество человек:');
    cy.get('section.listing-features li:nth-child(3)').should('contain.text', 'Вайфай:');
    cy.get('section.listing-features li:nth-child(4)').should('contain.text', 'Санузел:');

    // через eq
    cy.get('section.listing-features li').eq(0).should('contain.text', 'Метро:');
    cy.get('section.listing-features li').eq(1).should('contain.text', 'Количество человек:');
    cy.get('section.listing-features li').eq(2).should('contain.text', 'Вайфай:');
    cy.get('section.listing-features li').eq(3).should('contain.text', 'Санузел:');

    // через then и индексацию
    cy.get('section.listing-features li').then(($items) => {
      expect($items[0]).to.contain.text('Метро:');
      expect($items[1]).to.contain.text('Количество человек:');
      expect($items[2]).to.contain.text('Вайфай:');
      expect($items[3]).to.contain.text('Санузел:');
    });
  });

  it('Проверка отображения apply', () => {
    cy.get('section.listing-apply').should('exist');
    cy.get('section.listing-apply h2').should('be.visible');
    cy.get('section.listing-apply div').should('exist');
    cy.get('section.listing-apply form').should('be.visible');
    cy.get('section.listing-apply button.submit-btn').should('be.visible');
  });

  it('Проверка текста перед формой', () => {
    cy.get('section.listing-apply').should('exist');
    cy.get('section.listing-apply h2.section-heading')
        .should('be.visible')
        .and('have.text', 'Подайте заявку сейчас, чтобы жить здесь');

    cy.get('section.listing-apply .listing-apply-form-container').should('exist');
    cy.get('section.listing-apply form')
        .should('be.visible')
        .and('have.attr', 'aria-label', 'Форма подачи заявки');
  });

  it('Проверка полей формы вручную', () => {
    cy.get('section.listing-apply form').should('be.visible');

    // Проверка первого поля (Имя)
    cy.get('label[for="first-name"]')
        .should('be.visible')
        .and('have.text', 'Имя');
    cy.get('#first-name')
        .should('be.visible')
        .and('have.attr', 'type', 'text')
        .and('have.attr', 'aria-required', 'true')
        .and('have.attr', 'required');

    // Проверка второго поля (Фамилия)
    cy.get('label[for="last-name"]')
        .should('be.visible')
        .and('have.text', 'Фамилия');
    cy.get('#last-name')
        .should('be.visible')
        .and('have.attr', 'type', 'text');

    // Проверка третьего поля (Почта)
    cy.get('label[for="email"]')
        .should('be.visible')
        .and('have.text', 'Почта');
    cy.get('#email')
        .should('be.visible')
        .and('have.attr', 'type', 'email')
        .and('have.attr', 'aria-required', 'true')
        .and('have.attr', 'required');

    // Проверка кнопки
    cy.get('button.submit-btn')
        .should('be.visible')
        .and('have.text', 'Подтвердить')
        .and('have.attr', 'aria-label', 'Подтвердить заявку')
        .and('have.attr', 'type', 'submit');
  });

  it('Проверка полей формы через функцию', () => {
    cy.get('section.listing-apply form').should('be.visible');

    // Проверка лейблов и соответствующих инпутов
    formFields.forEach((field) => {
      // Проверка лейблов
      cy.get(`label[for="${field.id}"]`)
          .should('be.visible')
          .and('have.text', field.label);

      // Проверка инпутов
      cy.get(`#${field.id}`)
          .should('be.visible')
          .and('have.attr', 'type', field.type);

      // Проверка обязательности
      if (field.required) {
        cy.get(`#${field.id}`).should('have.attr', 'aria-required', 'true');
      }
    });
  });

  it('проверка стилей h2', () => {
    cy.get('section.listing-apply h2')
        .should('be.visible')
        .and('have.css', 'font-size', '24px')
        .and('have.css', 'color', 'rgb(0, 0, 0)')
        .and('have.css', 'font-weight', '700')
        .and('have.css', 'margin-bottom', '15px');
  });

  it('проверка стилей h2 через expect', () => {
    cy.get('section.listing-apply h2')
        .should('be.visible')
        .and('have.prop', 'tagName', 'H2')
        .then(($el) => {
          expect($el).to.have.css('font-size', '24px');
          expect($el).to.have.css('font-weight', '700');
          expect($el).to.have.css('color', 'rgb(0, 0, 0)');
          expect($el).to.have.css('margin-bottom', '15px');
        });
  });

  it('проверка стилей h2 через const', () => {
    cy.get('section.listing-apply h2').each(($el) => {
      listingApplySectionTitle.forEach(([property, value]) => {
        expect($el).to.have.css(property, value);
      });
    });
  });

  it('проверка стилей лейблов', () => {
    cy.get('section.listing-apply form').should('be.visible');

    formFields.forEach(({ id, label }) => {
      if (label) {
        cy.get(`label[for="${id}"]`)
          .should('be.visible')
          .and('have.text', label)
          .and('have.css', 'font-size', '16px')
          .and('have.css', 'color', 'rgb(139, 137, 230)')
          .and('have.css', 'font-weight', '700')
          .and('have.css', 'text-transform', 'uppercase');
      }
    });
  });

  it('проверка цвета всех лейблов expect', () => {
    cy.get('section.listing-apply form label').each(($label) => {
      expect($label).to.have.css('color', 'rgb(139, 137, 230)');
    });
  });

  it('проверка стилей инпутов', () => {
    cy.get('section.listing-apply form').should('be.visible');

    formFields.forEach((field) => {
      // if проверяет наличие field.id
      if (field.id) {
        cy.get(`#${field.id}`)
            .should('be.visible')
            // Базовые стили
            .and('have.css', 'background-color', 'rgb(255, 255, 255)')
            .and('have.css', 'padding', '10px')
            .and('have.css', 'margin-bottom', '15px')
            .and('have.css', 'border-style', 'solid')
            .and('have.css', 'border-color', 'rgb(96, 93, 200)')
            .and('have.css', 'border-radius', '5px')
            .and('not.have.css', 'border-width', '0px')
            // Стили шрифта
            .and('have.css', 'font-size', '22px')
            .and('have.css', 'color', 'rgb(0, 0, 0)')
            .and('have.css', 'font-weight', '400')
            .and('have.css', 'text-align', 'start');
      }
    });
  });

  it('проверка height и width инпутов', () => {
    cy.get('section.listing-apply form').should('be.visible');

    formFields.forEach((field) => {
      if (field.id) {
        cy.get(`#${field.id}`)
            .should('be.visible')
            .then(($el) => {
              // Получаем computed styles
              const height = parseFloat(window.getComputedStyle($el[0]).height);
              const width = parseFloat(window.getComputedStyle($el[0]).width);

              expect(height).to.be.closeTo(15, 0.5);
              expect(width).to.be.closeTo(400, 0.5);
            });
      }
    });
  });

  it('проверка border-width всех инпутов', () => {
    cy.get('section.listing-apply form').should('be.visible');

    formFields.forEach((field) => {
      if (field.id) {
        cy.get(`#${field.id}`)
            .should('be.visible')
            .and(($el) => {
              const borderWidth = parseFloat(window.getComputedStyle($el[0]).borderWidth);
              expect(borderWidth).to.be.greaterThan(0.5);
              expect(borderWidth).to.be.lessThan(1.1);
            });
      }
    });
  });

  it('проверка border-width всех инпутов: expect', () => {
    cy.get('section.listing-apply form').should('be.visible');

    formFields.forEach((field) => {
      cy.get(`#${field.id}`)
          .should('have.css', 'border-width')
          .then((borderWidth: string) => {
            expect(parseFloat(borderWidth)).to.be.within(0.5, 1.1);
          });
    });
  });

  it('проверка border-width всех инпутов: const', () => {
    cy.get('section.listing-apply form').should('be.visible');

    formFields.forEach((field) => {
      cy.get(`#${field.id}`)
          .should(($el) => {
            assertBorderWidthInRange($el);
          });
    });
  });

  it('проверка порядка элементов (простая)', () => {
    cy.get('section.listing-apply').within(() => {
      cy.get('h2 + div > form').should('exist');
    });
  });

  it('проверка порядка элементов (строгая)', () => {
    cy.get('section.listing-apply').within(() => {
      cy.get('h2 + div > form').should('exist');
    });

    cy.get('section.listing-apply form').within(() => {
      const elementsOrder = [
        'label[for="first-name"]',
        'input#first-name',
        'label[for="last-name"]',
        'input#last-name',
        'label[for="email"]',
        'input#email',
        'button[type="submit"]'
      ];

      elementsOrder.forEach((selector, index) => {
        if (index > 0) {
          cy.get(elementsOrder[index-1]).next(selector).should('exist');
        } else {
          cy.get(selector).should('exist');
        }
      });
    });
  });
});

describe('Проверка валидациии формы', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.get('section.listing').should('exist').first().click();
  });

  it('Валидный firstName', () => {
    cy.get('section.listing-apply form').should('be.visible');

    cy.get('#first-name').should('have.class', 'ng-invalid');
    cy.get('#first-name').type('test').blur().should('have.class', 'ng-valid');
  });

  it('Валидный firstName 2', () => {
    cy.get('section.listing-apply form').should('be.visible');

    cy.get('#first-name')
        .should('have.class', 'ng-invalid')
        .type('test')
        .blur()
        .should('have.class', 'ng-valid');
  });

  it('Валидный lastName', () => {
    cy.get('section.listing-apply form').should('be.visible');

    cy.get('#last-name').should('have.class', 'ng-valid');
    cy.get('#last-name').type('test').blur().should('have.class', 'ng-valid');
  });

  it('Валидный lastName 2', () => {
    cy.get('section.listing-apply form').should('be.visible');

    cy.get('#last-name')
        .should('have.class', 'ng-valid')
        .type('test')
        .blur()
        .should('have.class', 'ng-valid');
  });

  it('Валидный email', () => {
    cy.get('section.listing-apply form').should('be.visible');

    cy.get('#email').should('have.class', 'ng-invalid');
    cy.get('#email').clear().type('test').blur().should('have.class', 'ng-invalid');
    cy.get('#email').clear().type('test@email.com').blur().should('have.class', 'ng-valid');
  });

  it('Валидный email 2', () => {
    cy.get('section.listing-apply form').should('be.visible');

    cy.get('#email')
        .should('have.class', 'ng-invalid')
        .type('test')
        .blur()
        .should('have.class', 'ng-invalid')
        .clear()
        .type('test@email.com')
        .blur()
        .should('have.class', 'ng-valid');
  });

  it('Динамичная валидность email', () => {
    cy.get('section.listing-apply form').should('be.visible');

    cy.get('#email').should('have.class', 'ng-invalid');
    cy.get('#email').clear().should('have.class', 'ng-invalid');
    cy.get('#email').type('test').blur().should('have.class', 'ng-invalid');
    cy.get('#email').clear().type('test@email.com').blur().should('have.class', 'ng-valid');
    cy.get('#email').clear().type('test').blur().should('have.class', 'ng-invalid');
    cy.get('#email').clear().blur().should('have.class', 'ng-invalid');
    cy.get('#email').type('test@email.com').blur().should('have.class', 'ng-valid');
  });

  it('Поля невалидны и кнопка заблокирована', () => {
    cy.get('section.listing-apply form').should('be.visible');

    // Проверка обязательного поля
    cy.get('#first-name').clear().blur();
    cy.get('#first-name').should('have.class', 'ng-invalid');

    // Проверка необязательного поля
    cy.get('#last-name').clear().blur();
    cy.get('#last-name').should('have.class', 'ng-valid');

    // Проверка валидации email
    cy.get('#email').type('test').blur();
    cy.get('#email').should('have.class', 'ng-invalid');

    cy.get('form').should('have.class', 'ng-invalid');
    cy.get('button.submit-btn').should('be.disabled');
  });

  it('Поля валидны и кнопка разблокирована', () => {
    cy.get('section.listing-apply form').should('be.visible');

    cy.get('#first-name').clear().blur();
    cy.get('#first-name').should('have.class', 'ng-invalid');
    cy.get('#first-name').type('test').blur();
    cy.get('#first-name').should('have.class', 'ng-valid');

    cy.get('#last-name').clear().blur();
    cy.get('#last-name').should('have.class', 'ng-valid');

    cy.get('#email').type('test').blur();
    cy.get('#email').should('have.class', 'ng-invalid');
    cy.get('#email').clear().type('test@email.com').blur();
    cy.get('#email').should('have.class', 'ng-valid');

    cy.get('form').should('have.class', 'ng-valid');
    cy.get('button.submit-btn').should('not.be.disabled');
  });

  it('Форма невалидна и кнопка заблокирована', () => {
    cy.get('section.listing-apply form').should('be.visible');

    // Проверка, что форма невалидна
    cy.get('form').should('have.class', 'ng-invalid');
    // Проверка, что кнопка заблокирована
    cy.get('button.submit-btn').should('be.disabled');
  });

  it('Форма валидна и кнопка разблокирована', () => {
    cy.get('section.listing-apply form').should('be.visible');

    cy.get('form').should('have.class', 'ng-invalid');
    cy.get('button.submit-btn').should('be.disabled');

    cy.get('#first-name').type('test').blur();
    cy.get('#email').type('test@email.com').blur();

    cy.get('form').should('have.class', 'ng-valid');
    cy.get('button.submit-btn').should('not.be.disabled');
  });

  it('Проверяет видимость и невалидность у полей required', () => {
    cy.get('section.listing-apply form').should('be.visible');

    formFields.forEach((field) => {
      cy.get(`#${field.id}`).should('be.visible');

      console.log(field);
    });

    formFields.filter(f => f.required).forEach((field) => {
      cy.get(`#${field.id}`).clear().blur()
          .should('have.class', 'ng-invalid');

      console.log(field);
    });
  });

  it('Заполнение формы', () => {
    cy.get('section.listing-apply form').should('be.visible');

    cy.get('#first-name').type('test').blur();
    cy.get('#last-name').type('test').blur();
    cy.get('#email').clear().type('test@email.com').blur();

    cy.get('button.submit-btn').should('not.be.disabled');
  });

  it('Заполнение и отправка формы', () => {
    cy.window().then((win: Cypress.AUTWindow) => {
      cy.spy(win.console, 'log').as('consoleLog');
    });

    cy.get('section.listing-apply form').should('be.visible');

    cy.get('#first-name').type('test').blur();
    cy.get('#last-name').type('test').blur();
    cy.get('#email').clear().type('test@email.com').blur();

    cy.get('form').should('have.class', 'ng-valid');
    cy.get('button.submit-btn').should('not.be.disabled').click();

    // Проверяем, что console.log вызван
    cy.window().its('console.log').should('be.calledWithMatch', {
      firstName: 'test',
      lastName: 'test',
      email: 'test@email.com'
    });
  });
});

describe ('Проверка отображения кнопки Подтвердить', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.get('section.listing').should('exist').first().click();
    cy.get('section.listing-apply form').should('be.visible');
  });

  it('кнопка существует в DOM', () => {
    cy.get('button.submit-btn').should('exist');
  });

  it('кнопка отображается', () => {
    cy.get('button.submit-btn').should('be.visible');
  });

  it('проверка текста в кнопке', () => {
    cy.get('button.submit-btn')
        .should('be.visible')
        .contains('Подтвердить');
  });

  it('кнопка недоступна пока не заполнена форма', () => {
    cy.get('button.submit-btn').contains('Подтвердить').and('be.disabled');
  });

  it('кнопка доступна после заполнения формы', () => {
    cy.get('#first-name').type('test').blur();
    cy.get('#last-name').type('test').blur();
    cy.get('#email').type('test@email.com').blur();
    cy.get('button.submit-btn').contains('Подтвердить').and('not.be.disabled');
  });

  it('проверка стилей кнопки', () => {
    const submitButtonStyles = {
      'padding': '10px',
      'border-radius': '8px',
      'background-color': 'rgb(96, 93, 200)',
      'border-color': 'rgb(96, 93, 200)',
      'color': 'rgb(255, 255, 255)',
      'font-size': '14px',
      'font-weight': '400',
      'text-align': 'center',
      'border-style': 'solid'
    };

    cy.get('button.submit-btn').then(($btn) => {
      Object.entries(submitButtonStyles).forEach(([property, value]) => {
        expect($btn).to.have.css(property, value)
      });

      const borderWidth = parseFloat(window.getComputedStyle($btn[0]).borderWidth);
      expect(borderWidth).to.be.closeTo(1, 0.5);
    });

    // через for
    // cy.get('button.submit-btn').then(($btn) => {
    //   for (const property in submitButtonStyles) {
    //     expect($btn).to.have.css(property, submitButtonStyles[property]);
    //   }
    // });
  });

  it('проверка высоты кнопки', () => {
    cy.get('button.submit-btn').then(($btn) => {
      const height = parseFloat(window.getComputedStyle($btn[0]).height);
      expect(height).to.be.closeTo(37, 1);
    });
  });

  it('состояние Default', () => {
    cy.get('button.submit-btn').should('have.css', 'background-color', 'rgb(96, 93, 200)');
  });

  it('состояние Hover', () => {
    cy.get('#first-name').type('test').blur();
    cy.get('#last-name').type('test').blur();
    cy.get('#email').type('test@email.com').blur();

    buttonHover('button.submit-btn');
  });

  it('состояние Pressed', () => {
    cy.get('#first-name').type('test').blur();
    cy.get('#last-name').type('test').blur();
    cy.get('#email').type('test@email.com').blur();

    buttonPressed('button.submit-btn');
  });

  it('состояние Disabled', () => {
    cy.get('button.submit-btn[disabled]') // Ищем по атрибуту
        .should('have.css', 'background-color', 'rgb(96, 93, 200)')
        .and('have.css', 'opacity', '0.5');

    // делаем кнопку доступной
    cy.get('#first-name').type('test').blur();
    cy.get('#last-name').type('test').blur();
    cy.get('#email').type('test@email.com').blur();

    // повторно проверяем disabled
    cy.get('button.submit-btn')
        .invoke('prop', 'disabled', true)
        .should('have.css', 'background-color', 'rgb(96, 93, 200)')
        .and('have.css', 'opacity', '0.5');
  });
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
// тесты на валидацию

// оптимизация тестов на hover, pressed + метод type (),
// сделать через подмену class чтобы быстрее тесты проходили