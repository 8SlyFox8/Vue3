describe('Тестирование регистрации пользователя', () => {
  const userName = 'myUsername';
  const password = 'mySecretPassword';

  it('должен отображать форму входа', () => {
    cy.visit('/vueRouter/login', { failOnStatusCode: false })
    cy.get('form').should('exist')
    cy.contains('label', 'Логин').find('input').should('exist');
    cy.contains('label', 'Пароль').find('input[type="password"]').should('exist')
    cy.get('button').contains('Войти').should('exist');
  })

  it('вводит логин и пароль, кликает Войти и проверяет URL', () => {
    cy.login(userName, password);
  });
})