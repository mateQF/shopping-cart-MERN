describe('ProductDetail', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/')
  })

  it('Should change the url to /api/products/:id', () => {
    cy.get('#root').find('.main-products').find('.product-container').find('.description-container').find('.link-product-detail').first().click()

    cy.url().should('include', 'http://127.0.0.1:5173/api/products/64a9c01111e8127a593414fd')
  })

  it("should show the product info and add it to the cart when click on button 'Add to cart'", () => {
    cy.visit('http://127.0.0.1:5173/api/products/64a9c01111e8127a593414fd')

    cy.contains('h1', 'Notebook EXO 14')

    cy.get('img').should('have.attr', 'src', 'https://images.start.com.ar/EXO-L65-2.jpg')

    cy.contains('h1', '$599')

    cy.get('.btn-add-cart').click()

    cy.get('.container-cart-products').should('have.length', 1)
    cy.contains('.row-product', 'Notebook EXO 14')
    cy.contains('.row-product', '$599')
  })
})
