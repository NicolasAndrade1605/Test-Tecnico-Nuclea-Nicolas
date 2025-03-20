describe('3.1.1 - Digitar um termo válido e verificar sugestões', () => {
    beforeEach(() => {
        cy.visit('https://www.amazon.com.br/ref=nav_logo');

        cy.get('body').then($body => {
            if ($body.find('#sp-cc-accept').length > 0) {
                cy.get('#sp-cc-accept').click();
            }
        });
    });

    it('Deve exibir sugestões ao digitar um termo válido', () => {
        cy.get('#twotabsearchtextbox')
            .should('be.visible')
            .type('notebook', { delay: 100 });

        cy.wait(1000); // Aguarda um pouco para as sugestões aparecerem
        
        cy.get('.autocomplete-results-container', { timeout: 10000 }) //timeout com o objetivo de evitar erro de timeout
            .should('be.visible');
        
        cy.get('.s-suggestion')
            .should('be.visible')
            .and('have.length.greaterThan', 0);
        
    });
    
    after(() => {
        cy.log('✅ TESTE CONCLUÍDO COM SUCESSO');
    });
});