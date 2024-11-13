/// <reference types="cypress" />

describe('Automação API.', () => {

  const postBody ={
    title: "Postagem de Teste",
    body: "Esta é uma postagem de teste feito por API com Cypress",
    userId: "1"
  };

  const putBody ={
    title: "Postagem Editada",
    body: "Esta é uma postagem que foi editada via API com Cypress",
    userId: "1"
  };


  it('Validar busca de uma lista de posts', () => {
    cy.api({
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'GET'
      }).then(response => {
        expect(response.status).to.eql(200)
        expect(response.headers['content-type']).to.include('application/json')
        expect(response.body).to.be.an('array')
    })
  })

  it('Validar busca de um post', () => {
    cy.api({
      url: 'https://jsonplaceholder.typicode.com/posts/1',
      method: 'GET'
      }).then(response => {
        expect(response.status).to.eql(200)
        expect(response.body.userId).to.eql(1)
        expect(response.body.id).to.eql(1)
        expect(response.body.title).to.eql('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
        expect(response.body).to.have.property('body');
        expect(response.headers['content-type']).to.include('application/json')
    })
  })

  it('Validar criação de um post', () => {
    cy.api({
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'POST',
      body : postBody
      }).then(response => {
        expect(response.status).to.eql(201)
        expect(response.body).to.have.property('id');
        expect(response.body.userId).to.eql(postBody.userId)
        expect(response.body.body).to.eql(postBody.body)
        expect(response.headers['content-type']).to.include('application/json')
    })
  })

  it('Validar atualização de um post', () => {
    cy.api({
      url: 'https://jsonplaceholder.typicode.com/posts/1',
      method: 'PUT',
      body : putBody
      }).then(response => {
        expect(response.status).to.eql(200)
        expect(response.body.title).to.not.be.eql('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
        expect(response.body).to.have.property('id');
        expect(response.body.userId).to.eql(putBody.userId)
        expect(response.body.body).to.eql(putBody.body)
        expect(response.headers['content-type']).to.include('application/json')
    })
  })

  it('Validar remoção de um post', () => {
    cy.api({
      url: 'https://jsonplaceholder.typicode.com/posts/1',
      method: 'DELETE',
      body : putBody
      }).then(response => {
        expect(response.status).to.eql(200)
        expect(response.headers['content-type']).to.include('application/json')
    })
  })

})