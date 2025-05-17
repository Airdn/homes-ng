// todo: вынести в utils/helpers.ts
export const hoverButton = (selector = '.search-btn'): void => {
    cy.get(selector).realHover();
};

export const pressedButton = (selector = '.search-btn'): void => {
    cy.get(selector).realMouseDown();
};

// export const buttonHover1 = () => {
//     cy.get('.submit-btn').realHover();
// };
//
// export const buttonPressed1 = () => {
//     cy.get('.submit-btn').realMouseDown();
// };
