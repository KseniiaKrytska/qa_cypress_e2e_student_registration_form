/// <reference types='cypress' />

export default class RegistrationPage {
  fillFirstNameField(firstName) {
    return cy.get('#firstName')
      .type(firstName);
  }

  fillLastNameField(lastName) {
    return cy.get('#lastName')
      .type(lastName);
  }

  fillEmailField(email) {
    return cy.get('#userEmail')
      .type(email);
  }

  chooseGender(gender) {
    return cy.contains('.custom-control-label', gender)
      .click();
  }

  fillMobileField(number) {
    return cy.get('#userNumber')
      .type(number);
  }

  fillBirthDateField({ day, month, year }) {
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select(year);
    cy.get('.react-datepicker__month-select').select(month);
    cy.get(`.react-datepicker__day--${day}`).first().click();
  }

  fillSubjectsField(subject) {
    return cy.get('#subjectsContainer')
      .type(`${subject}{Enter}`);
  }

  chooseHobbie(hobbie) {
    return cy.contains('label.custom-control-label', hobbie)
      .click();
  }

  fillAdressField(adress) {
    return cy.get('#currentAddress')
      .type(adress);
  }

  selectState(stateName) {
    cy.get('#state').click();
    cy.contains('.css-11unzgr div', stateName).click();
  }

  selectCity() {
    cy.get('#city').click();
    cy.get('#react-select-4-option-2').should('be.visible').click();
  }

  submitForm() {
    return cy.get('#submit')
      .click();
  }

  assertSubmitWindow() {
    return cy.get('.modal-content').should('be.visible');
  }

  assertWindowData(firstName, lastName, email,
    gender, mobileNumber, dateOfBirth, subject, hobbie, adress, state, city) {
    const { day, month, year } = dateOfBirth;
    cy.contains('td', 'Student Name').next().should('have.text', `${firstName} ${lastName}`);
    cy.contains('td', 'Student Email').next().should('have.text', email);
    cy.contains('td', 'Gender').next().should('have.text', gender);
    cy.contains('td', 'Mobile').next().should('have.text', mobileNumber);
    cy.contains('td', 'Date of Birth').next().should('have.text', `${day.slice(1)} ${month},${year}`);
    cy.contains('td', 'Subjects').next().should('have.text', subject);
    cy.contains('td', 'Hobbies').next().should('have.text', hobbie);
    cy.contains('td', 'Address').next().should('have.text', adress);
    cy.contains('td', 'State and City').next().should('have.text', `${state} ${city}`);
  }
}
