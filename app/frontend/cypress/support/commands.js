Cypress.Commands.add('login', (userName, password) => {
  cy.visit('/vueRouter/login');
  cy.contains('label', 'Логин').find('input').type(userName);
  cy.contains('label', 'Пароль').find('input[type="password"]').type(password);
  cy.get('button').contains('Войти').click();
  cy.url().should('include', `/vueRouter/user/${userName}`);
});