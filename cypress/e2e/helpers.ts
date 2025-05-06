export const getSearchButton = () => cy.get('.search-btn');

export const getSearchInput = () => cy.get('input[type="search"]');

export const checkFilteredResults = (minLength: number) => {
    cy.get('.housing-location').should('have.length.greaterThan', minLength);
};

export const getButton = () => cy.get('.search-btn');
export const innerButton = () => cy.get('.search-btn');

export const buttonHover = () => innerButton().realHover();
export const buttonPress = () => {
    innerButton().realHover();
    innerButton().realMouseDown();
};
