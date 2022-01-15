describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })
   
  it("should update the display of the running total when the number buttons", () => {
    cy.get("#number1").click();
    cy.get("#number8").click();
    cy.get(".display").should("contain", "18");
  });

  it("should update the display of the running total when the add operations are carried out", () => {
    cy.get("#number1").click();
    cy.get("#number8").click();
    cy.get("#operator_add").click();
    cy.get("#number6").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "24");
  });

  it("should update the display of the running total as negative when the subtract operations are carried out", () => {
    cy.get("#number1").click();
    cy.get("#number8").click();
    cy.get("#operator-subtract").click();
    cy.get("#number6").click();
    cy.get("#number8").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "-50");
  });

  it("should update the display of the running total as large number when the multiply operations are carried out", () => {
    cy.get("#number1").click();
    cy.get("#number8").click();
    cy.get("#number8").click();
    cy.get("#number8").click();
    cy.get("#operator-multiply").click();
    cy.get("#number6").click();
    cy.get("#number6").click();
    cy.get("#number6").click();
    cy.get("#number6").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "12585408");
  });

  it("should update the display of the running total as decimal when the divide operations are carried out", () => {
    cy.get("#number1").click();
    cy.get("#number8").click();
    cy.get("#operator-divide").click();
    cy.get("#number6").click();
    cy.get("#number6").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "0.272727");
  });
 
  it("should update the display of the running total when chain multiple operations together", () => {
    cy.get("#number1").click();
    cy.get("#number8").click();
    cy.get("#operator_add").click();
    cy.get("#number9").click();
    cy.get("#operator-subtract").click();
    cy.get("#number8").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "19");
  });

  // in divide function to check  when the number equal 0, display infinity.
   it("should update the display of the running total as infinity when the divide by 0 are carried out", () => {
     cy.get("#number1").click();
     cy.get("#number8").click();
     cy.get("#operator-divide").click();
     cy.get("#number0").click();
     cy.get("#operator-equals").click();
     cy.get(".display").should("contain", "infinity");
   });






 
})