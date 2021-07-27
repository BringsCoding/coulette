describe("Teste die APP", () => {
  it("teste", () => {
    cy.visit("http://localhost:9864/");
    cy.get("#generate").click();
    cy.get("#save").click();
    cy.get("#generate").click();
    cy.get("#save").click();
    cy.get("#generate").click();
    cy.get("#save").click();
    cy.get("#DelteButton").click();
  });
});
