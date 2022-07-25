import { OptimisticOrganisationAPIResponse } from "types/modules/organisation";
import { apiResponseFactory, organisationFactory, generateTags } from "fixtureFactories";
import { tagdefDictionary } from "./tagdef";

const organisation1 = organisationFactory("80b5914a-organisation-44e8-8db0-f85875c989d4", {
  name: "Organisation 1",
  hubAgencyId: "111",
  inboxEmailAddress: "org1@test.com",
  products: {
    "80b5914a-product-44e8-8db0-f85875c989d1": {
      name: "Product 2",
      defaultContactDatabaseFields: [],
      contactDatabaseOptions: {},
      contactDefinition: {
        uniqueKeys: [],
        sections: [],
      },
    },
},
contactDatabaseFields: {
    robKey: {
    name: "Roberto",
    compulsory: false,
    customFieldType: {
        value: "",
        label: "",
      },
      freeText: false,
      multiSelect: false,
    },
  },
});

const organisation1Deactivated = {
  ...organisation1,
  tags: [
    ...organisation1.tags,
    {
      tagdef: "bb9f527e-e925-4f44-8456-b935c827a99a",
      value: "active",
      end: "2018-01-08 12:50:00",
    },
  ],
};

const organisation1ProductAddded = {
  ...organisation1,
  products: {
    ...organisation1.products,
    "80b5914a-product-44e8-8db0-f85875c989d4": {
      name: "Barometer",
      defaultContactDatabaseFields: [],
      contactDefinition: {
        uniqueKeys: [],
        sections: [],
      },
      contactDatabaseOptions: {},
    },
  },
};

const organisation1CustomFieldAdded = {
  ...organisation1,
  contactDatabaseFields: {
    ...organisation1.contactDatabaseFields,
    "80b5914a-product-44e8-8db0-f85875c989d4": {
      name: "custom field name",
      compulsory: false,
      customFieldType: { value: "text", label: "Text" },
      freeText: false,
      multiSelect: false,
    },
  },
};
const organisation2 = organisationFactory("80b5914a-organisation-44e8-8db0-f85875c989d1", {
  name: "Organisation 2",
  hubAgencyId: "222",
  contactDatabaseFields: {
    customID112: {
      name: "Custom ID",
      compulsory: false,
      customFieldType: {
        value: "text",
        label: "Text",
      },
      freeText: false,
      multiSelect: false,
    },
    customName231: {
      name: "Custom Name",
      compulsory: false,
      customFieldType: {
        value: "text",
        label: "Text",
      },
      freeText: false,
      multiSelect: false,
    },
  },
});

const organisation3 = organisationFactory("80b5914a-7963-44e8-8db0-f85875c989d2", {
  name: "Organisation 3",
  hubAgencyId: "333",
  tags: [],
});

const testABCClientOrganisation = organisationFactory("org1uuid", {
  name: "Test ABC Client",
  hubAgencyId: "4444",
  inboxEmailAddress: "abc@test.com",
  products: {
    "80b5914a-product-44e8-8db0-f85875c989d4": {
      name: "Product 2",
      contactDefinition: {
        uniqueKeys: [],
        sections: [],
      },
      defaultContactDatabaseFields: [],
      contactDatabaseOptions: {
        languages: {
          brpt: "Brazilian Portuguese",
          cs: "Czech",
          da: "Danish",
          de: "German",
          en: "English",
          enus: "US English",
          es: "Spanish",
          fi: "Finnish",
          fr: "French",
          frca: "French Canadian",
          hu: "Hungarian",
          it: "Italian",
          ja: "Japanese",
          ko: "Korean",
          nl: "Dutch",
          no: "Norwegian",
          pl: "Polish",
          pt: "Portuguese",
          ru: "Russian",
          sk: "Slovakian",
          sr: "Serbian",
          sv: "Swedish",
          th: "Thai",
          tr: "Turkish",
          zh: "Chinese Simplified",
          zhHa: "Chinese Traditional",
        },
        contactTypes: {
          cc: "Critical Contact",
          pc: "Primary Contact",
          none: "None",
        },
        statusTypes: {
          active: "Active",
          excluded: "excluded",
          parentalLeave: "Parental Leave",
          away: "Away",
          new: "New",
          removed: "Removed",
          paternity: "Paternity",
          optOut: "Opt-out",
        },
      },
    },
  },
});

const tesDEFClientOrganisation = organisationFactory("org1uuid", {
  name: "Test DEF Client",
  hubAgencyId: "555",
  crc_object_uuid: "org2uuid",
  tags: [],
});

const orgWithPirates = organisationFactory("orgOneStep", {
  name: "Org with pirates",
  hubAgencyId: "666",
  products: {
    "80b5914a-product-44e8-8db0-f85875c989d4": {
      name: "Product 2",
      contactDefinition: {
        uniqueKeys: [],
        sections: [],
      },
      defaultContactDatabaseFields: [],
      contactDatabaseOptions: {
        languages: {
          brpt: "Brazilian Portuguese",
          cs: "Czech",
          da: "Danish",
          de: "German",
          en: "English",
          enus: "US English",
          es: "Spanish",
          fi: "Finnish",
          fr: "French",
          frca: "French Canadian",
          hu: "Hungarian",
          it: "Italian",
          ja: "Japanese",
          ko: "Korean",
          nl: "Dutch",
          no: "Norwegian",
          pl: "Polish",
          pt: "Portuguese",
          ru: "Russian",
          sk: "Slovakian",
          sr: "Serbian",
          sv: "Swedish",
          th: "Thai",
          tr: "Turkish",
          zh: "Chinese Simplified",
          zhHa: "Chinese Traditional",
        },
        contactTypes: {
          cc: "Critical Contact",
          pc: "Primary Contact",
          none: "None",
        },
        statusTypes: {
          active: "Active",
          excluded: "excluded",
          parentalLeave: "Parental Leave",
          away: "Away",
          new: "New",
          removed: "Removed",
          paternity: "Paternity",
        },
      },
    },
  },
  crc_object_uuid: "3ba5daec-6d5a-40cc-81fd-1e97199a4492",
});

const orgWithNotCustomField = organisationFactory("orgNoCustom", {
  name: "Org with no custom fields",
  hubAgencyId: "777",
});

const orgWithCustomSite = organisationFactory("orgCustomSites", {
  name: "Org with custom site",
  hubAgencyId: "888",
  contactDatabaseFields: {
    customID112: {
      name: "Custom Site ID",
      compulsory: false,
      customFieldType: {
        value: "",
        label: "",
      },
      freeText: false,
      multiSelect: false,
    },
    customName231: {
      name: "Custom Site Name",
      compulsory: false,
      customFieldType: {
        value: "",
        label: "",
      },
      freeText: false,
      multiSelect: false,
    },
  },
});

const orgWithCustomDiggers = organisationFactory("orgCustomDiggers", {
  name: "Org with custom diggers",
  hubAgencyId: "999",
  contactDatabaseFields: {
    customID112: {
      name: "Custom Digger ID",
      compulsory: false,
      customFieldType: {
        value: "",
        label: "",
      },
      freeText: false,
      multiSelect: false,
    },
    customName231: {
      name: "Custom Digger Name",
      compulsory: false,
      customFieldType: {
        value: "",
        label: "",
      },
      freeText: false,
      multiSelect: false,
    },
  },
});

const orgWithCompulsoryField = organisationFactory("orgCompulsoryField", {
  name: "Org with CompulsoryFields",
  hubAgencyId: "122",
  contactDatabaseFields: {
    customID112: {
      name: "Site",
      compulsory: true,
      customFieldType: {
        value: "",
        label: "",
      },
      freeText: false,
      multiSelect: false,
    },
  },
});

const orgWithApproval = organisationFactory("approvalOrgUUID", {
  name: "Approval Org",
  hubAgencyId: "133",
  contactDatabaseFields: {
    customID112: {
      name: "Site",
      compulsory: false,
      customFieldType: {
        value: "",
        label: "",
      },
      freeText: false,
      multiSelect: false,
    },
    customID113: {
      name: "Age",
      compulsory: false,
      customFieldType: {
        value: "",
        label: "",
      },
      freeText: false,
      multiSelect: false,
    },
    customID114: {
      name: "Favourite Time of day",
      compulsory: false,
      customFieldType: {
        value: "",
        label: "",
      },
      freeText: false,
      multiSelect: false,
    },
    customID115: {
      name: "Height",
      compulsory: false,
      customFieldType: {
        value: "",
        label: "",
      },
      freeText: false,
      multiSelect: false,
    },
    customID16: {
      name: "Weight",
      compulsory: false,
      customFieldType: {
        value: "",
        label: "",
      },
      freeText: false,
      multiSelect: false,
    },
    customID17: {
      name: "Number of Siblings",
      compulsory: false,
      customFieldType: {
        value: "",
        label: "",
      },
      freeText: false,
      multiSelect: false,
    },
    customID18: {
      name: "Number of Pets",
      compulsory: false,
      customFieldType: {
        value: "",
        label: "",
      },
      freeText: false,
      multiSelect: false,
    },
    customID19: {
      name: "Favourite show",
      compulsory: false,
      customFieldType: {
        value: "",
        label: "",
      },
      freeText: false,
      multiSelect: false,
    },
  },
});

interface IOrganisationFixtures {
  standard: OptimisticOrganisationAPIResponse;
  singleOrg: OptimisticOrganisationAPIResponse;
  withOrgDeactivated: OptimisticOrganisationAPIResponse;
  withProductAdded: OptimisticOrganisationAPIResponse;
  withCustomFieldAdded: OptimisticOrganisationAPIResponse;
}

export const organisations: IOrganisationFixtures = {
  standard: apiResponseFactory([
    organisation1,
    organisation2,
    organisation3,
    testABCClientOrganisation,
    tesDEFClientOrganisation,
    orgWithPirates,
    orgWithNotCustomField,
    orgWithCustomSite,
    orgWithCustomDiggers,
    orgWithCompulsoryField,
    orgWithApproval,
  ]),
  withOrgDeactivated: apiResponseFactory([
    organisation1Deactivated,
    organisation2,
    organisation3,
    testABCClientOrganisation,
    tesDEFClientOrganisation,
    orgWithPirates,
    orgWithNotCustomField,
    orgWithCustomSite,
    orgWithCustomDiggers,
    orgWithCompulsoryField,
    orgWithApproval,
  ]),
  withProductAdded: apiResponseFactory([
    organisation1ProductAddded,
    organisation2,
    organisation3,
    testABCClientOrganisation,
    tesDEFClientOrganisation,
    orgWithPirates,
    orgWithNotCustomField,
    orgWithCustomSite,
    orgWithCustomDiggers,
    orgWithCompulsoryField,
    orgWithApproval,
  ]),
  withCustomFieldAdded: apiResponseFactory([
    organisation1CustomFieldAdded,
    organisation2,
    organisation3,
    testABCClientOrganisation,
    tesDEFClientOrganisation,
    orgWithPirates,
    orgWithNotCustomField,
    orgWithCustomSite,
    orgWithCustomDiggers,
    orgWithCompulsoryField,
    orgWithApproval,
  ]),

  singleOrg: apiResponseFactory([organisation1]),
};

/* Generates tags for each of the objects, unfortunately I couldn't get this function to be name aware but when you use this generate tags
 * function you should be aware that it returns tags which have the same name as the object with "Tag" appended on the end (as shown below)
 * these tags can then be imported into other fixtures and tagged
 */
export const {
  organisation1Tag,
  organisation2Tag,
  organisation3Tag,
  testABCClientOrganisationTag,
  tesDEFClientOrganisationTag,
  orgWithPiratesTag,
  orgWithNotCustomFieldTag,
  orgWithCustomSiteTag,
  orgWithCustomDiggersTag,
  orgWithCompulsoryFieldTag,
  orgWithApprovalTag,
} = generateTags<keyof typeof tagdefDictionary>(
  {
    organisation1,
    organisation2,
    organisation3,
    testABCClientOrganisation,
    tesDEFClientOrganisation,
    orgWithPirates,
    orgWithNotCustomField,
    orgWithCustomSite,
    orgWithCustomDiggers,
    orgWithCompulsoryField,
    orgWithApproval,
  },
  "organisation",
  tagdefDictionary,
);