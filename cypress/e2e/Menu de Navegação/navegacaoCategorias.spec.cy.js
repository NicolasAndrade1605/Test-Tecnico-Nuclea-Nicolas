describe('3.2.3 - Verificar navegação entre categorias', () => {
    beforeEach(() => {
        cy.visit('https://www.amazon.com.br/ref=nav_logo');
    
        cy.get('body').then($body => {
            if ($body.find('#sp-cc-accept').length > 0) {
                cy.get('#sp-cc-accept').click();
            }
        });
    });

    it('Deve navegar para a categoria correta ao clicar no menu', () => {
        cy.get('#nav-hamburger-menu').click();
        cy.get('.hmenu-visible', { timeout: 10000 }).should('be.visible'); // Aguardar o menu abrir
    
        cy.get('.hmenu-visible > :nth-child(21) > .hmenu-compressed-btn').click(); 
        cy.contains('.hmenu-item', 'Eletrônicos').click();
        cy.contains('.hmenu-item', 'Tudo em Eletrônicos').click();
    
        cy.url().should('include', 'node=16209062011'); // Verificar a  URL
    
    });

    it('Deve exibir categorias principais no menu', () => {
        cy.get('#nav-hamburger-menu').click();
        
        // Aguardar o menu abrir
        cy.get('.hmenu-visible', { timeout: 10000 }).should('be.visible');
        
        // Verificar se categorias principais estão visíveis
        cy.get('.hmenu-visible > :nth-child(21) > .hmenu-compressed-btn').click();
        cy.contains('.hmenu-item', 'Eletrônicos').should('be.visible');
        cy.contains('.hmenu-item', 'Livros').should('be.visible');
        cy.contains('.hmenu-item', 'Casa').should('be.visible');
        

    })

    after(() => {
        cy.log('✅ TESTE CONCLUÍDO COM SUCESSO');
    });
});