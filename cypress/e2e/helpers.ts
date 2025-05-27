// todo: вынести в utils/helpers.ts
export const hoverButton = (selector = '.search-btn'): void => {
    cy.get(selector).realHover();
};

export const pressedButton = (selector = '.search-btn'): void => {
    cy.get(selector).realMouseDown();
};

export const formFields = [
    {
        label: 'Имя',
        id: 'first-name',
        type: 'text',
        required: true
    },
    {
        label: 'Фамилия',
        id: 'last-name',
        type: 'text',
        required: false
    },
    {
        label: 'Почта',
        id: 'email',
        type: 'email',
        required: true
    }
];

export const getBorderWidth = (element: JQuery<HTMLElement>): number => {
    return parseFloat(window.getComputedStyle(element[0]).borderWidth);
};

export const assertBorderWidthInRange = (
    element: JQuery<HTMLElement>,
    min: number = 0.5,
    max: number = 1.1
): void => {
    const borderWidth = getBorderWidth(element);
    expect(borderWidth).to.be.within(min, max);
};

// export const buttonHover1 = () => {
//     cy.get('.submit-btn').realHover();
// };
//
// export const buttonPressed1 = () => {
//     cy.get('.submit-btn').realMouseDown();
// };
