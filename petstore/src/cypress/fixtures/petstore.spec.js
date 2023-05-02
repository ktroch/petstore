/// <reference types="Cypress" />

describe('PetStore API Tests', () => {

  const petData = require('../fixtures/pet.json');

  beforeEach(() => {
    cy.request('POST', '/api/user/login', {
      username: 'test',
      password: 'test123'
    }).then((response) => {
      expect(response.status).to.eq(200);
      Cypress.env('token', response.body.message);
    });
  });

  it('Añadir una mascota a la tienda', () => {
    cy.request({
      method: 'POST',
      url: '/api/pet',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': Cypress.env('token')
      },
      body: petData
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq(petData.name);
      expect(response.body.category.name).to.eq(petData.category.name);
      expect(response.body.photoUrls).to.deep.eq(petData.photoUrls);
      expect(response.body.tags[0].name).to.eq(petData.tags[0].name);
      expect(response.body.status).to.eq(petData.status);
      Cypress.env('petId', response.body.id);
    });
  });

  it('Consultar la mascota ingresada previamente (Búsqueda por ID)', () => {
    cy.request({
      method: 'GET',
      url: '/api/pet/' + Cypress.env('petId'),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': Cypress.env('token')
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(Cypress.env('petId'));
      expect(response.body.name).to.eq(petData.name);
      expect(response.body.category.name).to.eq(petData.category.name);
      expect(response.body.photoUrls).to.deep.eq(petData.photoUrls);
      expect(response.body.tags[0].name).to.eq(petData.tags[0].name);
      expect(response.body.status).to.eq(petData.status);
    });
  });

  it('Actualizar el nombre de la mascota y el estatus de la mascota a "sold"', () => {
    const updatedPetData = {
      "id": Cypress.env('petId'),
      "category": {
        "id": 2,
        "name": "Dogs"
      },
      "name": "New Name",
      "photoUrls": [
        "https://images.unsplash.com/photo-1598992804967-79533f04d266"
      ],
      "tags": [
        {
          "id": 1,
          "name": "Tag1"
        }
      ],
      "status": "sold"
    };

    cy.request({
      method: 'PUT',
      url: '/api/pet',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': Cypress.env('token')
      },
      body: updatedPetData
    }).then((response) => {
      expect(response.status).to.eq(200);
    });

    cy.request({
      method: 'GET',
      url: '/api/pet/' + Cypress.env('petId'),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': Cypress.env('token')
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(Cypress.env
