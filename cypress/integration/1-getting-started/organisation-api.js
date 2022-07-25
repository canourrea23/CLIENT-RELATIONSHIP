/// <reference types="Cypress" />

import { Given, Before } from "cypress-cucumber-preprocessor/steps";
// import { organisations } from "../../../fixtures/organisation";
import org from "../../fixtures/organization"
import { organisations } from '../../fixtures/organization.json';

// const organisationRoute = "**/organisation";

//make my ouwn code with there fiture file and use cy.intercept and on ts

// Given("I have an API with organisations", () => {
//   cy.intercept("POST", organisationRoute, organisations.singleOrg).as("createOrganisation");
//   cy.intercept("GET", `${organisationRoute}/list`, organisations.standard).as("getOrganisations");

Before(() => {
  // cy.server();
  cy.fixture(organisations).as('organization')
 
});
it('displays a long list', () => {
  //   cy.intercept('GET', '**/organisations/*', { fixture: 'organization.json' }).as('getOrganization')
cy.fixture('organisation.ts').then((users) => {
  // now we can avoid the alias altogether
  // and use a callback function
  const user = users

  // passes
  cy.log(user)
})
})
// it('displays a long list', () => {
//   cy.intercept('GET', '**/organisations/*', { fixture: 'organization.json' }).as('getOrganization')
 
 
// })
  // cy.intercept({
  //   method: 'GET'
  // },
  // {
  //   fixture: userData
  // }
  // ).as(getUsers)
  // })


// });
// Given("I have an API with organisations", () => {
//   // cy.intercept("GET", `${organisationRoute}/list`, organisations.standard).as("getOrganisations");
// });

// const organisationRoute = "**/organisation";
/** 
Before(() => {
  // cy.server();
  cy.fixture('organization.json').as('userData')
  cy.log('I run before every test in every spec file!!!!!!')
});
// beforeEach(() => {
//   cy.log('I run before every test in every spec file!!!!!!')
// })

// ///////////////// READ /////////////////
it('displays a long list', () => {
cy.intercept({
  method: 'GET'
},
{
  fixture: user.standard
}
).as(getUsers)
})


Given("I have an API with organisations", () => {
  cy.intercept("POST", organisationRoute, organisations.singleOrg).as("createOrganisation");
  cy.intercept("GET", `${organisationRoute}/list`, organisations.standard).as("getOrganisations");
});
*/