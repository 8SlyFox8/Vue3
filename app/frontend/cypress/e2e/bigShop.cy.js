describe('Тестирование товаров пользователя', () => {
  const userName = 'myUsername';
  const password = 'mySecretPassword';

  beforeEach(() => {
    cy.login(userName, password);
  });

  it('Переходит в магазин и проверяет наличие товаров', () => {
    cy.contains('a', 'Магазин').click();
    cy.url().should('include', '/productList');
    cy.get('input[type="checkbox"]').should('exist');
  });

  it('Выбирает первый товар и проверяет обновление количества в корзине', () => {
    cy.contains('a', 'Магазин').click();
    cy.url().should('include', '/productList');

    cy.contains('a', /^Корзина \d+$/).then($link => {
      const text = $link.text();
      const match = text.match(/Корзина (\d+)/);
      const initialCount = match ? parseInt(match[1], 10) : 0;
      cy.get('input[type="checkbox"]').first().check({ force: true });
      cy.contains('a', new RegExp(`Корзина ${initialCount + 1}`)).should('exist');
    });
  });
});