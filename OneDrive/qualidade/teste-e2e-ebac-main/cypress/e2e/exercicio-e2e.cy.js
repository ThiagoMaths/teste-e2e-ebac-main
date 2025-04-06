/// <reference types="cypress" />

import produtosPage from "../support/page_objects/produtos-page";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
    produtosPage.visitarUrl()
});

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
    produtosPage.buscarProduto('Aether Gym Pant')
    produtosPage.addCarrinho('36', 'Brown', 4)
    produtosPage.checkout()
  });



})