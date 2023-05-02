describe('Añadir una mascota a la tienda', () => {
  let newPetId = 0;

  beforeEach(() => {
    // Se limpian las cookies antes de cada test
    cy.clearCookies();
  });

  it('debería poder agregar una nueva mascota', () => {
    cy.fixture('mascotas.json').then((mascotas) => {
      // Se hace la petición para añadir la mascota
      cy.request({
        method: 'POST',
        url: 'https://petstore.swagger.io/v2/pet',
        body: mascotas.nuevaMascota
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.name).to.eq(mascotas.nuevaMascota.name);
          newPetId = response.body.id;
          expect(newPetId).to.be.a('number');
        });
    });
  });
});
