Cypress.Commands.add("addPetToStore", (petData) => {
  cy.request({
    method: 'POST',
    url: '/pet',
    headers: {
      'Content-Type': 'application/json'
    },
    body: petData,
  });
});

Cypress.Commands.add("getPetById", (id) => {
  cy.request(`/pet/${id}`).then((response) => {
    expect(response.status).to.eq(200);
    cy.wrap(response.body).as('petData');
  });
});

Cypress.Commands.add("updatePetStatusAndName", (id, status, name) => {
  cy.request({
    method: 'PUT',
    url: `/pet/${id}`,
    headers: {
      'Content-Type': 'application/json'
    },
    body: {
      "id": id,
      "name": name,
      "status": status
    }
  });
});

Cypress.Commands.add("getPetByStatus", (status) => {
  cy.request(`/pet/findByStatus?status=${status}`).then((response) => {
    expect(response.status).to.eq(200);
    cy.wrap(response.body).as('petsData');
  });
});
