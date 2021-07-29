describe("todo App", () => {
  it("should allow to enter text", () => {
    cy.visit("/");
    cy.get("[data-cy='input']")
      .type("learn cypress")
      .should("have.value", "learn cypress");
  });

  it("should add li elements", () => {
    cy.visit("/");
    cy.get("[data-cy='input']").type("learn cypress");

    cy.get("[data-cy='button']").click();

    cy.get("[data-cy='list']").get("li").should("have.length", 1);
  });
});
