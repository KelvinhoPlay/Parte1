describe('Desafio parte 1', () => {
  let token;
  let userId;
  const user = {
    userName: `kelvinho_${Date.now()}`, 
    password: 'Teste456!'
  };

  before(() => {
    
    cy.request('POST', 'https://demoqa.com/Account/v1/User', user)
      .then((res) => {
        expect(res.status).to.eq(201);
        userId = res.body.userID;
      });

    
    cy.request('POST', 'https://demoqa.com/Account/v1/GenerateToken', user)
      .then((res) => {
        expect(res.status).to.eq(200);
        token = res.body.token;
      });
  });

  it('Autorizar usuário', () => {
    cy.request('POST', 'https://demoqa.com/Account/v1/Authorized', user)
      .then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body).to.eq(true);
      });
  });

  it('Listar livros', () => {
    cy.request('GET', 'https://demoqa.com/BookStore/v1/Books')
      .then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body.books.length).to.be.greaterThan(0);
      });
  });

  it('Adicionar livro 1', () => {
    cy.request({
      method: 'POST',
      url: 'https://demoqa.com/BookStore/v1/Books',
      headers: { Authorization: `Bearer ${token}` },
      body: {
        userId: userId,
        collectionOfIsbns: [{ isbn: '9781449331818' }]
      }
    }).then((res) => {
      expect(res.status).to.eq(201);
    });
  });

  it('Adicionar livro 2', () => {
    cy.request({
      method: 'POST',
      url: 'https://demoqa.com/BookStore/v1/Books',
      headers: { Authorization: `Bearer ${token}` },
      body: {
        userId: userId,
        collectionOfIsbns: [{ isbn: '9781593277574' }]
      }
    }).then((res) => {
      expect(res.status).to.eq(201);
    });
  });

  it('Verificar detalhes do usuário com os livros escolhidos', () => {
    cy.request({
      method: 'GET',
      url: `https://demoqa.com/Account/v1/User/${userId}`,
      headers: { Authorization: `Bearer ${token}` }
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.username).to.eq(user.userName);
      expect(res.body.books.length).to.be.greaterThan(0);
    });
  });
});
