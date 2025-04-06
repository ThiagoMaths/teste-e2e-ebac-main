class ProdutosPage {

    visitarUrl(){
        cy.visit('produtos');
    }

    buscarProduto(nomeProduto){
        cy.get('[name="s"]').eq(1).type(nomeProduto);
        cy.get('.button-search').eq(1).click();
    }

    addCarrinho(tamanho, cor, quantidade){
        cy.get('.button-variable-item-' + tamanho).click();
        cy.get('.button-variable-item-' + cor).click();
        cy.get('.input-text').clear().type(quantidade);
        cy.get('.single_add_to_cart_button').click();
    }

    checkout(){
        cy.get('.dropdown-toggle > .text-skin');
        cy.get('.woocommerce-message > .button').click();   
        cy.get('.checkout-button').click();
        cy.get('.showlogin').click()
        cy.fixture('perfil.json').then(dadosLogin => {
            cy.get('#username').type(dadosLogin.usuario)
            cy.get('#password').type(dadosLogin.senha)
            cy.get('.woocommerce-button').click()

        }) 
        cy.get('#place_order').should('exist')

        }
e
     }
   

 

export default new ProdutosPage()