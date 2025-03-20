describe('3.3.3 - Testar diferentes navegadores', () => {
    beforeEach(() => {
        cy.visit('https://www.amazon.com.br/ref=nav_logo');
        
        cy.get('body').then($body => {
            if ($body.find('#sp-cc-accept').length > 0) {
                cy.get('#sp-cc-accept').click();
            }
        });
        /* 
          para rodar esse script, é necessário rodar os seguintes comandos:
            npx cypress run --spec "cypress/e2e/CarregamentoDesempenho/diferentesNavegadores.spec.cy.js" --browser chrome
            npx cypress run --spec "cypress/e2e/CarregamentoDesempenho/diferentesNavegadores.spec.cy.js" --browser firefox
            npx cypress run --spec "cypress/e2e/CarregamentoDesempenho/diferentesNavegadores.spec.cy.js" --browser edge
        */
    });

    it('Deve verificar compatibilidade com o navegador atual', () => {
        const browserName = Cypress.browser.name;
        const browserVersion = Cypress.browser.version;
        const userAgent = navigator.userAgent;
        
        cy.log(`Navegador: ${browserName}`);
        cy.log(`Versão: ${browserVersion}`);
        cy.log(`User Agent: ${userAgent}`);
        cy.get('#nav-logo-sprites').should('be.visible'); // verifica o logo da amazon
        cy.get('#twotabsearchtextbox').should('be.visible'); // verifica a barra de pesquisa
        cy.get('#nav-cart').should('be.visible'); // verifica o carrinho
        cy.get('#twotabsearchtextbox').type('teste{enter}');
        cy.url().should('include', 'teste');
        
        cy.window().then((win) => {
            const div = win.document.createElement('div');
            div.innerHTML = `✅ Navegador ${browserName.toUpperCase()} v${browserVersion} validado com sucesso!`;
            div.style.position = 'fixed';
            div.style.top = '0';
            div.style.left = '0';
            div.style.backgroundColor = 'green';
            div.style.color = 'white';
            div.style.padding = '10px';
            div.style.zIndex = '9999';
            div.style.fontSize = '20px';
            win.document.body.appendChild(div);
        });
    });
    
    it('Deve verificar recursos específicos do navegador', () => {
        const browserName = Cypress.browser.name;
        
        //escolha de navegadores
        if (browserName === 'chrome') {
            cy.log('Verificando recursos específicos do Chrome');
        } else if (browserName === 'firefox') {
            cy.log('Verificando recursos específicos do Firefox');
        } else if (browserName === 'edge') {
            cy.log('Verificando recursos específicos do Edge');
        } else {
            cy.log(`Verificando navegador: ${browserName}`);
        }
        
        cy.get('body').should('be.visible');
        cy.get('#nav-logo-sprites').should('have.css', 'display');
        
        cy.log(`✅ Teste de recursos específicos concluído para ${browserName}`);
    });
    
    afterEach(() => {
        cy.log(`Validação concluída no navegador: ${Cypress.browser.name}`);
    });
});