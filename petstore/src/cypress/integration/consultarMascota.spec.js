/// <reference types="Cypress" />

describe('Consultar mascota ingresada previamente', () => {
  let idMascota;

  before(() => {
    cy.fixture('mascotas.json').then((mascotas) => {
      // Se obtiene el ID de la primera mascota en el archivo mascotas.json
      idMascota = mascotas[0].id;
    });
  });

  it('Consultar mascota por ID', () => {
    cy.request({
      method: 'GET',
      url: `https://petstore.swagger.io/v2/pet/${idMascota}`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', idMascota);
    });
  });
});
