describe("Teste die APP", () => {
  it("teste", () => {
    cy.visit("http://localhost:5000/");
    cy.get("#generate").click();
    cy.get("#save").click();
  });
});
