/// <reference types="Cypress" />

import { Given, Before } from "cypress-cucumber-preprocessor/steps";
// import { organisations } from "../../../fixtures/organisation";
import org from "../../fixtures/organization"

const organisationRoute = "**/organisation";

//make my ouwn code with there fiture file and use cy.intercept and on ts