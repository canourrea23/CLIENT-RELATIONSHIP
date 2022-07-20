/// <reference types="Cypress" />

import { Given, Before } from "cypress-cucumber-preprocessor/steps";
import { organisations } from "../../../fixtures/organisation";
import org from "../../fixtures/organization"

const organisationRoute = "**/organisation";

Before(() => {
  cy.server();
});

///////////////// READ /////////////////
Given("I have an API with organisations", () => {
  cy.intercept("POST", organisationRoute, organisations.singleOrg).as("createOrganisation");
  cy.intercept("GET", `${organisationRoute}/list`, organisations.standard).as("getOrganisations");
});

Given("I have an API with a single organisation", () => {
  const organisationsSingleOrg = organisations.singleOrg;
  cy.intercept("GET", `${organisationRoute}/list`, organisationsSingleOrg).as(
    "getSingleOrganisation",
  );
});

///////////////// UPDATE /////////////////
Given("I have an API to update an organisation", () => {
  cy.intercept("PUT", `${organisationRoute}/**`, {
    body: [{ object: {} }],
  }).as("updateOrganisation");
});

Given("I have an API that fail to update an organisation", () => {
  cy.intercept("PUT", `${organisationRoute}/**`, {
    body: {},
    statusCode: 409,
  }).as("updateOrganisation");
});

Given("I have an API to deactivate a organisation", () => {
  cy.intercept("PUT", `${organisationRoute}/**`, { body: [] }).as("deactivateOrganisation");
  cy.server();
  cy.route(`${organisationRoute}/list`, organisations.withOrgDeactivated).as(
    "getOrganisationsDeactivated",
  );
});

Given("I have an API to add a product to a organisation", () => {
  cy.intercept("PUT", `${organisationRoute}/**/product`, []).as("updateOrganisationProducts");
  cy.server();
  cy.route("GET", `${organisationRoute}/list`, organisations.withProductAdded).as(
    "getUpdateOrganisationProducts",
  );
});

Given("I have an API to add a customfield to a organisation", () => {
  cy.intercept("PUT", `${organisationRoute}/**`, []).as("addOrganisationCustomField");
  cy.intercept("GET", `${organisationRoute}/list`, organisations.withCustomFieldAdded).as(
    "getUpdateOrganisationProducts",
  );
});
