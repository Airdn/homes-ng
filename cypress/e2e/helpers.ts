// todo: вынести в utils/helpers.ts
export const buttonHover = (selector: string) => {
    cy.get(selector)
        .invoke('addClass', 'hover')
        .should('have.css', 'background-color', 'rgb(78, 75, 155)');
};

export const buttonPressed = (selector: string) => {
    cy.get(selector)
        .invoke('addClass', 'active')
        .should('have.css', 'background-color', 'rgb(62, 58, 125)');
};

export const BUTTON_STATES = {
    SEARCH: {
        hover: 'rgb(78, 75, 155)',
        pressed: 'rgb(62, 58, 125)'
    },
    SUBMIT: {
        hover: 'rgb(78, 75, 155)',
        pressed: 'rgb(62, 58, 125)'
    }
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

export const listingApplySectionTitle = [
    ['font-size', '24px'],
    ['font-weight', '700'],
    ['color', 'rgb(0, 0, 0)'],
    ['margin-bottom', '15px']
];

// export const buttonHover1 = () => {
//     cy.get('.submit-btn').realHover();
// };
//
// export const buttonPressed1 = () => {
//     cy.get('.submit-btn').realMouseDown();
// };
