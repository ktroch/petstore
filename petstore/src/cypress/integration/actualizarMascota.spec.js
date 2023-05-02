describe('Actualizar Mascota', () => {
  let mascotaId;
  let mascotaNombre;
  let mascotaStatus;

  before(() => {
    cy.fixture('mascotas.json').then((mascotas) => {
      mascotaId = mascotas[0].id;
      mascotaNombre = mascotas[0].name;
      mascotaStatus = mascotas[0].status;
    });
  });

  it('debería actualizar el nombre y el estado de la mascota a "sold"', () => {
    cy.request({
      method: 'PUT',
      url: `https://petstore.swagger.io/v2/pet/${mascotaId}`,
      body: {
        "id": mascotaId,
        "category": {
          "id": 0,
          "name": "string"
        },
        "name": `${mascotaNombre} vendida`,
        "photoUrls": [
          "string"
        ],
        "tags": [
          {
            "id": 0,
            "name": `${mascotaStatus} vendida`
          }
        ],
        "status": "sold"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(mascotaId);
      expect(response.body.name).to.eq(`${mascotaNombre} vendida`);
      expect(response.body.status).to.eq('sold');
    });
  });

  it('debería consultar la mascota actualizada por ID', () => {
    cy.request(`https://petstore.swagger.io/v2/pet/${mascotaId}`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(mascotaId);
      expect(response.body.name).to.eq(`${mascotaNombre} vendida`);
      expect(response.body.status).to.eq('sold');
    });
  });
});
