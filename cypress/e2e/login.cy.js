describe("Login Tests", () => {

  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("Successful login", () => {
    cy.get('input[type="email"]').type("test@test.com");
    cy.get('input[type="password"]').type("Admin123");
    cy.get('input[type="checkbox"]').check();

    cy.get("button").should("not.be.disabled").click();

    cy.url().should("include", "/success");
  });

  it("Wrong Email", () => {
    cy.get('input[type="email"]').type("asd");
    cy.get('input[type="password"]').type("Admin123");

    cy.get("button").should("be.disabled");
  });

  it("Email and password wrong", () => {
    cy.get('input[type="email"]').type("asd");
    cy.get('input[type="password"]').type("123");

    cy.get("button").should("be.disabled");
  });

  it("Unaccepted terms", () => {
    cy.get('input[type="email"]').type("test@test.com");
    cy.get('input[type="password"]').type("Admin123");

    cy.get("button").should("be.disabled");
  });

});