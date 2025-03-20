describe ('3.1.6 - Testar sugestões de pesquisa com palavras incompletas', () => {
    beforeEach(() => {
        cy.visit('https://www.amazon.com.br/ref=nav_logo');

        cy.get('body').then($body => {
            if ($body.find('#sp-cc-accept').length > 0) {
                cy.get('#sp-cc-accept').click();
            }
        });
    });

    it ('Ao digitar palavras incompletas a sugestão aparece na barra de pesquisa', () => {
        cy.get('#twotabsearchtextbox')
            .should('be.visible')
            .type('phoe 16', { delay: 100 }
        );

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