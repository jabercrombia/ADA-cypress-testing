describe('Image Accessibility Test', () => {
    it('Ensures all <img> tags have alt attributes', () => {
      cy.visit('https://www.jabercrombia.com'); // Replace with your URL
  
      cy.get('img').each(($img) => {
        cy.wrap($img)
          .should('have.attr', 'alt')
          .and('not.be.empty');
      });
    });
  });
  