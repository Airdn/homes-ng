export const buttonHover = () => {
    cy.get('.search-btn').realHover();
};

export const buttonPressed = () => {
    cy.get('.search-btn').realMouseDown();
};

// export const buttonHover1 = () => {
//     cy.get('.submit-btn').realHover();
// };
//
// export const buttonPressed1 = () => {
//     cy.get('.submit-btn').realMouseDown();
// };
