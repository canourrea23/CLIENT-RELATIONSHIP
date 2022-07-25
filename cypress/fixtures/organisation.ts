// import { OptimisticOrganisationAPIResponse } from "types/modules/organisation";
// import { apiResponseFactory,  , generateTags } from "fixtureFactories";
// import { tagdefDictionary } from "./tagdef";

const organisation1 = ( {
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