/// <reference types="Cypress" />

import { Given, Before } from "cypress-cucumber-preprocessor/steps";
// import { organisations } from "../../../fixtures/organisation";
import org from "../../fixtures/organization"

const organisationRoute = "**/organisation";

//make my ouwn code with there fiture file and use cy.intercept and on ts

// import { organisations } from '../cypress/fixtures/organization';

// const organisationRoute = "**/organisation";

Before(() => {
  // cy.server();
});

///////////////// READ /////////////////
Given("I have an API with organisations", () => {
  cy.intercept("POST", organisationRoute, organisations.singleOrg).as("createOrganisation");
  cy.intercept("GET", `${organisationRoute}/list`, organisations.standard).as("getOrganisations");
});