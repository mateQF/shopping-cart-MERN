describe('Product', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('Should display the product name', () => {
    cy.get('#root')
      .find('.main-products')
      .find('.container')
      .contains('Notebook EXO 14')
  })

  it('Should add the product to the cart', () => {
    cy.get('.main-products')
      .find('.container')
      .find('.product-container')
      .find('.btn-add')
      .first()
      .click()

    cy.get('.openCart').click().should('have.length', 1)
    cy.contains('.row-product', 'Notebook EXO 14')
    cy.contains('.row-product', '$599')
  })
})
