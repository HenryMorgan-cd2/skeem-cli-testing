export const schema = {
  "db": {
    "tables": [
      {
        "name": "images",
        "columns": [
          {"name": "createdAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "updatedAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "deletedAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "reference", "type": "TEXT", "nullable": true},
          {"name": "alt", "type": "TEXT", "nullable": true},
          {"name": "uid", "type": "uuid", "nullable": false}
        ],
        "indexes": []
      },
      {
        "name": "providers",
        "columns": [
          {"name": "createdAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "updatedAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "deletedAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "name", "type": "TEXT", "nullable": true},
          {"name": "userName", "type": "TEXT", "nullable": false}
        ],
        "indexes": []
      },
      {
        "name": "pages",
        "columns": [
          {"name": "createdAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "updatedAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "deletedAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "title", "type": "TEXT", "nullable": false},
          {"name": "pageTitle", "type": "TEXT", "nullable": true},
          {"name": "metaDesc", "type": "TEXT", "nullable": true},
          {"name": "slug", "type": "TEXT", "nullable": false},
          {"name": "body", "type": "TEXT", "nullable": true},
          {
            "name": "template",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {"name": "lat", "type": "DOUBLE PRECISION", "nullable": true},
          {"name": "lng", "type": "DOUBLE PRECISION", "nullable": true},
          {
            "name": "northBound",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "eastBound",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "southBound",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "westBound",
            "type": "TEXT",
            "default": "",
            "nullable": false
          }
        ],
        "indexes": []
      },
      {
        "name": "propertyViews",
        "columns": [
          {"name": "userId", "type": "uuid", "nullable": true},
          {"name": "createdAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "updatedAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "deletedAt", "type": "TIMESTAMP", "nullable": true}
        ],
        "indexes": [{"columns": ["userId"]}]
      },
      {
        "name": "property-propertyViews--association",
        "columns": [
          {"name": "propertyViewsId", "type": "uuid", "nullable": false},
          {"name": "propertiesId", "type": "uuid", "nullable": false}
        ],
        "indexes": [
          {"columns": ["propertyViewsId"]},
          {"columns": ["propertiesId"]},
          {"unique": true, "columns": ["propertyViewsId", "propertiesId"]}
        ]
      },
      {
        "name": "mediaTags",
        "columns": [{"name": "name", "type": "TEXT", "nullable": true}],
        "indexes": []
      },
      {
        "name": "mediaTaggings",
        "columns": [
          {"name": "mediaTagId", "type": "uuid", "nullable": true},
          {"name": "propertyAttachmentId", "type": "uuid", "nullable": true},
          {"name": "score", "type": "double precision", "nullable": true}
        ],
        "indexes": [
          {"columns": ["mediaTagId"]},
          {"columns": ["propertyAttachmentId"]}
        ]
      },
      {
        "name": "properties",
        "columns": [
          {"name": "createdAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "updatedAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "deletedAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "agentId", "type": "uuid", "nullable": true},
          {"name": "providerId", "type": "uuid", "nullable": true},
          {"name": "blmRef", "type": "TEXT", "nullable": true},
          {"name": "branchRef", "type": "TEXT", "nullable": true},
          {"name": "type", "type": "TEXT", "nullable": true},
          {"name": "name", "type": "TEXT", "nullable": true},
          {"name": "slug", "type": "TEXT", "nullable": false},
          {"name": "body", "type": "TEXT", "nullable": true},
          {"name": "summary", "type": "TEXT", "nullable": true},
          {"name": "published", "type": "BOOLEAN", "nullable": true},
          {"name": "pricePer", "type": "TEXT", "nullable": true},
          {
            "name": "pricePennies",
            "type": "double precision",
            "nullable": true
          },
          {
            "name": "depositPennies",
            "type": "double precision",
            "nullable": true
          },
          {"name": "availableAt", "type": "TIMESTAMP", "nullable": true},
          {
            "name": "contractMonths",
            "type": "double precision",
            "nullable": true
          },
          {"name": "features", "type": "TEXT", "nullable": true},
          {"name": "adminFees", "type": "TEXT", "nullable": true},
          {"name": "beds", "type": "double precision", "nullable": true},
          {"name": "bathrooms", "type": "double precision", "nullable": true},
          {"name": "addressLine1", "type": "TEXT", "nullable": true},
          {"name": "addressLine2", "type": "TEXT", "nullable": true},
          {"name": "addressLine3", "type": "TEXT", "nullable": true},
          {"name": "addressLine4", "type": "TEXT", "nullable": true},
          {"name": "town", "type": "TEXT", "nullable": true},
          {"name": "postcode", "type": "TEXT", "nullable": true},
          {"name": "lat", "type": "numeric", "nullable": true},
          {"name": "lng", "type": "numeric", "nullable": true},
          {"name": "vr", "type": "TEXT", "nullable": true},
          {
            "name": "bulletPointsJSON",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "iconsJSON",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "unpublishReason",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "hidden",
            "type": "BOOLEAN",
            "default": false,
            "nullable": false
          },
          {
            "name": "noDeposit",
            "type": "BOOLEAN",
            "default": false,
            "nullable": false
          },
          {
            "name": "bikeStorage",
            "type": "BOOLEAN",
            "default": false,
            "nullable": false
          },
          {
            "name": "houseShare",
            "type": "BOOLEAN",
            "default": false,
            "nullable": false
          },
          {
            "name": "washingMachine",
            "type": "BOOLEAN",
            "default": false,
            "nullable": false
          },
          {
            "name": "dishWasher",
            "type": "BOOLEAN",
            "default": false,
            "nullable": false
          },
          {
            "name": "universityLivingSlug",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "sturentsId",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {"name": "owner", "type": "TEXT", "default": "", "nullable": false},
          {"name": "roomCount", "type": "DOUBLE PRECISION", "nullable": true},
          {"name": "origin", "type": "TEXT", "default": "", "nullable": false},
          {
            "name": "nearestPlacesData",
            "type": "TEXT",
            "default": "",
            "nullable": false
          }
        ],
        "indexes": [
          {"columns": ["agentId"]},
          {"columns": ["providerId"]},
          {
            "where": "\"slug\" <> ''::TEXT",
            "unique": true,
            "columns": ["slug"]
          },
          {
            "where": "\"sturentsId\" <> ''",
            "unique": true,
            "columns": ["sturentsId"]
          }
        ]
      },
      {
        "name": "agents",
        "columns": [
          {"name": "createdAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "updatedAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "deletedAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "providerId", "type": "uuid", "nullable": true},
          {"name": "name", "type": "TEXT", "nullable": true},
          {"name": "email", "type": "TEXT", "nullable": true},
          {"name": "phone", "type": "TEXT", "nullable": true},
          {"name": "trackingPhone", "type": "TEXT", "nullable": true},
          {"name": "bio", "type": "TEXT", "nullable": true},
          {"name": "branchId", "type": "TEXT", "nullable": true},
          {"name": "addressLine1", "type": "TEXT", "nullable": true},
          {"name": "addressLine2", "type": "TEXT", "nullable": true},
          {"name": "addressLine3", "type": "TEXT", "nullable": true},
          {"name": "addressLine4", "type": "TEXT", "nullable": true},
          {"name": "town", "type": "TEXT", "nullable": true},
          {"name": "postcode", "type": "TEXT", "nullable": true},
          {"name": "lat", "type": "numeric", "nullable": true},
          {"name": "lng", "type": "numeric", "nullable": true},
          {"name": "legacyAddress", "type": "TEXT", "nullable": true},
          {"name": "legacyMediaRef", "type": "TEXT", "nullable": true},
          {
            "name": "phoneClickedCount",
            "type": "DOUBLE PRECISION",
            "nullable": true
          },
          {
            "name": "googleSheetId",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "contactName",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "googleRating",
            "type": "DOUBLE PRECISION",
            "nullable": true
          },
          {
            "name": "googleUrl",
            "type": "TEXT",
            "default": "",
            "nullable": false
          }
        ],
        "indexes": [{"columns": ["providerId"]}]
      },
      {
        "name": "enquiries",
        "columns": [
          {"name": "createdAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "updatedAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "deletedAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "name", "type": "TEXT", "default": "", "nullable": false},
          {"name": "email", "type": "TEXT", "default": "", "nullable": false},
          {"name": "message", "type": "TEXT", "default": "", "nullable": false},
          {
            "name": "enquiryType",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "response",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "receiveUpdates",
            "type": "BOOLEAN",
            "default": false,
            "nullable": false
          },
          {"name": "phone", "type": "TEXT", "default": "", "nullable": false},
          {
            "name": "archived",
            "type": "BOOLEAN",
            "default": false,
            "nullable": false
          },
          {"name": "company", "type": "TEXT", "default": "", "nullable": false},
          {
            "name": "enquiryViewed",
            "type": "BOOLEAN",
            "default": false,
            "nullable": false
          },
          {
            "name": "volleyballId",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "has_uk_guarantor",
            "type": "BOOLEAN",
            "default": false,
            "nullable": false
          },
          {
            "name": "preferred_contact_method",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {"name": "notes", "type": "TEXT", "default": "", "nullable": false},
          {
            "name": "university_name",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "anonymousEmail",
            "type": "TEXT",
            "default": "",
            "nullable": false
          }
        ],
        "indexes": []
      },
      {
        "name": "universities",
        "columns": [
          {"name": "createdAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "updatedAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "deletedAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "name", "type": "TEXT", "nullable": false}
        ],
        "indexes": []
      },
      {
        "name": "houses",
        "columns": [
          {"name": "createdAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "updatedAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "deletedAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "name", "type": "TEXT", "nullable": true},
          {"name": "addressId", "type": "uuid", "nullable": true}
        ],
        "indexes": [{"columns": ["addressId"]}]
      },
      {
        "name": "addresses",
        "columns": [
          {"name": "createdAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "updatedAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "deletedAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "line1", "type": "TEXT", "nullable": true},
          {"name": "line2", "type": "TEXT", "nullable": true},
          {"name": "line3", "type": "TEXT", "nullable": true},
          {"name": "city", "type": "TEXT", "nullable": true},
          {"name": "county", "type": "TEXT", "nullable": true},
          {"name": "postcode", "type": "TEXT", "nullable": true},
          {"name": "country", "type": "TEXT", "nullable": true},
          {"name": "firstName", "type": "TEXT", "nullable": true},
          {"name": "lastName", "type": "TEXT", "nullable": true},
          {"name": "phone", "type": "TEXT", "nullable": true}
        ],
        "indexes": []
      },
      {
        "name": "contracts",
        "columns": [
          {"name": "createdAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "updatedAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "deletedAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "startDate", "type": "TIMESTAMP", "nullable": true},
          {"name": "endDate", "type": "TIMESTAMP", "nullable": true},
          {"name": "houseId", "type": "uuid", "nullable": true},
          {"name": "moveInDate", "type": "TIMESTAMP", "nullable": true},
          {"name": "lettingAgency", "type": "TEXT", "nullable": true},
          {
            "name": "electricMeterSerialNumber",
            "type": "TEXT",
            "nullable": true
          },
          {
            "name": "electricMeterReading",
            "type": "double precision",
            "nullable": true
          },
          {"name": "gasMeterSerialNumber", "type": "TEXT", "nullable": true},
          {
            "name": "gasMeterReading",
            "type": "double precision",
            "nullable": true
          },
          {
            "name": "hubspotCompanyId",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {"name": "tenantCount", "type": "DOUBLE PRECISION", "nullable": true},
          {
            "name": "tv",
            "type": "BOOLEAN",
            "default": false,
            "nullable": false
          },
          {
            "name": "packageLevel",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "internetServiceId",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "power",
            "type": "BOOLEAN",
            "default": false,
            "nullable": false
          },
          {
            "name": "water",
            "type": "BOOLEAN",
            "default": false,
            "nullable": false
          },
          {
            "name": "utilities",
            "type": "BOOLEAN",
            "default": false,
            "nullable": false
          },
          {
            "name": "volleyballId",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "totalPennies",
            "type": "DOUBLE PRECISION",
            "nullable": true
          },
          {
            "name": "utilitiesPennies",
            "type": "DOUBLE PRECISION",
            "nullable": true
          },
          {"name": "tvPennies", "type": "DOUBLE PRECISION", "nullable": true},
          {
            "name": "internetPennies",
            "type": "DOUBLE PRECISION",
            "nullable": true
          },
          {
            "name": "perMonthPennies",
            "type": "DOUBLE PRECISION",
            "nullable": true
          },
          {
            "name": "oneTimePennies",
            "type": "DOUBLE PRECISION",
            "nullable": true
          },
          {
            "name": "voucherPennies",
            "type": "DOUBLE PRECISION",
            "nullable": true
          },
          {
            "name": "voucherId",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "inactive",
            "type": "BOOLEAN",
            "default": false,
            "nullable": false
          },
          {
            "name": "receivedWelcomeMessage",
            "type": "BOOLEAN",
            "default": false,
            "nullable": false
          },
          {
            "name": "undiscountedOneTimePennies",
            "type": "DOUBLE PRECISION",
            "nullable": true
          },
          {
            "name": "undiscountedPerMonthPennies",
            "type": "DOUBLE PRECISION",
            "nullable": true
          }
        ],
        "indexes": [{"columns": ["houseId"]}]
      },
      {
        "name": "invites",
        "columns": [
          {"name": "createdAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "updatedAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "deletedAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "token", "type": "TEXT", "nullable": true},
          {"name": "email", "type": "TEXT", "nullable": false},
          {"name": "status", "type": "TEXT", "default": "", "nullable": false}
        ],
        "indexes": []
      },
      {
        "name": "tenancies",
        "columns": [
          {"name": "createdAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "updatedAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "deletedAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "contractId", "type": "uuid", "nullable": true},
          {"name": "email", "type": "TEXT", "nullable": true},
          {"name": "userId", "type": "uuid", "nullable": true},
          {"name": "inviteId", "type": "uuid", "nullable": true},
          {"name": "status", "type": "TEXT", "nullable": true},
          {"name": "stage", "type": "TEXT", "nullable": true},
          {"name": "primaryTenant", "type": "boolean", "nullable": true},
          {"name": "guarantorName", "type": "TEXT", "nullable": true},
          {"name": "guarantorEmail", "type": "TEXT", "nullable": true},
          {"name": "guarantorPhone", "type": "TEXT", "nullable": true},
          {"name": "goCardlessPlanId", "type": "TEXT", "nullable": true},
          {"name": "name", "type": "TEXT", "nullable": true},
          {
            "name": "voucherId",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "hubspotContactVid",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "stripeCustomerId",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "stripeSubscriptionId",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "oneTimePennies",
            "type": "DOUBLE PRECISION",
            "nullable": true
          },
          {
            "name": "perMonthPennies",
            "type": "DOUBLE PRECISION",
            "nullable": true
          },
          {
            "name": "totalPennies",
            "type": "DOUBLE PRECISION",
            "nullable": true
          },
          {"name": "phone", "type": "TEXT", "default": "", "nullable": false},
          {
            "name": "priceQuotedAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "nullable": true
          },
          {
            "name": "occupation",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "billingPeriod",
            "type": "TEXT",
            "default": "quarterly",
            "nullable": false
          },
          {
            "name": "quoteIncludesVoucher",
            "type": "BOOLEAN",
            "default": false,
            "nullable": false
          },
          {
            "name": "internetPennies",
            "type": "DOUBLE PRECISION",
            "nullable": true
          },
          {"name": "tvPennies", "type": "DOUBLE PRECISION", "nullable": true},
          {
            "name": "utilitiesPennies",
            "type": "DOUBLE PRECISION",
            "nullable": true
          },
          {
            "name": "voucherPennies",
            "type": "DOUBLE PRECISION",
            "nullable": true
          },
          {
            "name": "billingDate",
            "type": "TIMESTAMP WITH TIME ZONE",
            "nullable": true
          },
          {
            "name": "stripeUtilitiesCustomerId",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "completedAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "nullable": true
          },
          {
            "name": "alreadyPaidBills",
            "type": "BOOLEAN",
            "default": false,
            "nullable": false
          },
          {
            "name": "inviteLastSentAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "nullable": true
          },
          {
            "name": "referralCode",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "undiscountedPerMonthPennies",
            "type": "DOUBLE PRECISION",
            "nullable": true
          },
          {
            "name": "undiscountedOneTimePennies",
            "type": "DOUBLE PRECISION",
            "nullable": true
          },
          {
            "name": "referralSource",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "referralPaid",
            "type": "BOOLEAN",
            "default": false,
            "nullable": false
          },
          {
            "name": "quoteSetManually",
            "type": "BOOLEAN",
            "default": false,
            "nullable": false
          },
          {
            "name": "firstInstallmentMonthly",
            "type": "BOOLEAN",
            "default": false,
            "nullable": false
          },
          {
            "name": "meterReadingsLastSentAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "nullable": true
          }
        ],
        "indexes": [
          {"columns": ["contractId"]},
          {"columns": ["userId"]},
          {"columns": ["inviteId"]}
        ]
      },
      {
        "name": "blogPosts",
        "columns": [
          {"name": "createdAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "updatedAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "deletedAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "slug", "type": "TEXT", "nullable": false},
          {"name": "title", "type": "TEXT", "nullable": true},
          {"name": "body", "type": "TEXT", "nullable": true},
          {"name": "excerpt", "type": "TEXT", "nullable": true},
          {"name": "imageThumbnail", "type": "TEXT", "nullable": true},
          {"name": "imageFull", "type": "TEXT", "nullable": true},
          {"name": "categories", "type": "jsonb[]", "nullable": true}
        ],
        "indexes": []
      },
      {
        "name": "blogCategories",
        "columns": [
          {"name": "createdAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "updatedAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "deletedAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "name", "type": "TEXT", "nullable": false},
          {"name": "slug", "type": "TEXT", "nullable": false}
        ],
        "indexes": []
      },
      {
        "name": "blogPostsBlogCategories-association",
        "columns": [
          {"name": "blogCategoriesId", "type": "UUID", "nullable": true},
          {"name": "blogPostsId", "type": "UUID", "nullable": true}
        ],
        "indexes": [
          {"columns": ["blogCategoriesId"]},
          {"columns": ["blogPostsId"]},
          {"unique": true, "columns": ["blogCategoriesId", "blogPostsId"]}
        ]
      },
      {
        "name": "users",
        "columns": [
          {"name": "createdAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "updatedAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "deletedAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "firstName", "type": "TEXT", "nullable": true},
          {"name": "lastName", "type": "TEXT", "nullable": true},
          {"name": "email", "type": "TEXT", "nullable": false},
          {"name": "sessions", "type": "jsonb", "nullable": true},
          {"name": "imageUid", "type": "TEXT", "nullable": true},
          {"name": "receiveUpdates", "type": "BOOLEAN", "nullable": true},
          {"name": "termsAndConditions", "type": "BOOLEAN", "nullable": true},
          {"name": "phone", "type": "TEXT", "nullable": true},
          {"name": "universityId", "type": "UUID", "nullable": true},
          {"name": "graduationYear", "type": "TEXT", "nullable": true},
          {"name": "legacySlug", "type": "TEXT", "nullable": true},
          {"name": "legacyMediaRef", "type": "TEXT", "nullable": true},
          {"name": "type", "type": "TEXT", "nullable": true},
          {"name": "goCardlessCustomerId", "type": "TEXT", "nullable": true},
          {"name": "dateOfBirth", "type": "TIMESTAMP", "nullable": true},
          {"name": "googleId", "type": "TEXT", "nullable": true},
          {"name": "facebookId", "type": "TEXT", "nullable": true},
          {"name": "billingAddressId", "type": "uuid", "nullable": true},
          {"name": "admin", "type": "BOOLEAN", "nullable": true},
          {"name": "agent", "type": "BOOLEAN", "nullable": true},
          {"name": "passwordResetToken", "type": "TEXT", "nullable": true},
          {"name": "password", "type": "TEXT", "nullable": true},
          {
            "name": "referralToken",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "referralCode",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "promoter",
            "type": "BOOLEAN",
            "default": false,
            "nullable": false
          },
          {
            "name": "promoterId",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "promoterEmail",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "swapToken",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "stripeAccountId",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "receiveEmail",
            "type": "BOOLEAN",
            "default": true,
            "nullable": false
          },
          {
            "name": "receivePhone",
            "type": "BOOLEAN",
            "default": true,
            "nullable": false
          },
          {
            "name": "referralClicks",
            "type": "DOUBLE PRECISION",
            "nullable": true
          },
          {
            "name": "receiveSocialMedia",
            "type": "BOOLEAN",
            "default": true,
            "nullable": false
          },
          {
            "name": "requiresPassword",
            "type": "BOOLEAN",
            "default": false,
            "nullable": false
          },
          {
            "name": "volleyballId",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "activeTenancyId",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "receivedWelcomeMessage",
            "type": "BOOLEAN",
            "default": false,
            "nullable": false
          },
          {
            "name": "referralsFiveClicksEmailSent",
            "type": "BOOLEAN",
            "default": false,
            "nullable": false
          },
          {
            "name": "receivedReferralsIntroEmail",
            "type": "BOOLEAN",
            "default": false,
            "nullable": false
          }
        ],
        "indexes": [
          {"columns": ["universityId"]},
          {"columns": ["billingAddressId"]},
          {"unique": true, "columns": ["email"]}
        ]
      },
      {
        "name": "agents-users--association",
        "columns": [
          {"name": "agentsId", "type": "uuid", "nullable": false},
          {"name": "usersId", "type": "uuid", "nullable": false}
        ],
        "indexes": [
          {"columns": ["agentsId"]},
          {"columns": ["usersId"]},
          {"unique": true, "columns": ["agentsId", "usersId"]}
        ]
      },
      {
        "name": "favourites",
        "columns": [
          {"name": "createdAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "updatedAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "deletedAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "userId", "type": "uuid", "nullable": true},
          {"name": "propertyId", "type": "uuid", "nullable": true}
        ],
        "indexes": [{"columns": ["userId"]}, {"columns": ["propertyId"]}]
      },
      {
        "name": "propertyAttachments",
        "columns": [
          {"name": "createdAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "updatedAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "deletedAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "propertyId", "type": "uuid", "nullable": true},
          {"name": "file_uid", "type": "TEXT", "nullable": true},
          {"name": "file_name", "type": "TEXT", "nullable": true},
          {"name": "body", "type": "TEXT", "nullable": true},
          {"name": "image", "type": "BOOLEAN", "nullable": true},
          {"name": "image_thumbnail", "type": "TEXT", "nullable": true},
          {"name": "image_small", "type": "TEXT", "nullable": true},
          {"name": "image_medium", "type": "TEXT", "nullable": true},
          {"name": "image_large", "type": "TEXT", "nullable": true},
          {"name": "weight", "type": "DOUBLE PRECISION", "nullable": true}
        ],
        "indexes": [{"columns": ["propertyId"]}]
      },
      {
        "name": "countries",
        "columns": [
          {"name": "createdAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "updatedAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "deletedAt", "type": "TIMESTAMP", "nullable": true},
          {"name": "name", "type": "TEXT", "nullable": false},
          {"name": "code", "type": "TEXT", "nullable": true},
          {"name": "phone", "type": "TEXT", "nullable": true}
        ],
        "indexes": []
      },
      {
        "name": "vouchers",
        "columns": [
          {
            "name": "amountPennies",
            "type": "DOUBLE PRECISION",
            "nullable": true
          },
          {"name": "name", "type": "TEXT", "default": "", "nullable": false},
          {
            "name": "expiryDate",
            "type": "TIMESTAMP WITH TIME ZONE",
            "nullable": true
          },
          {
            "name": "createAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "nullable": true
          },
          {"name": "code", "type": "TEXT", "default": "", "nullable": false},
          {"name": "useLimit", "type": "DOUBLE PRECISION", "nullable": true},
          {"name": "redemptions", "type": "DOUBLE PRECISION", "nullable": true},
          {
            "name": "updatedAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "nullable": true
          },
          {
            "name": "locked",
            "type": "BOOLEAN",
            "default": false,
            "nullable": false
          },
          {"name": "notes", "type": "TEXT", "default": "", "nullable": false},
          {
            "name": "affectOneTimePayment",
            "type": "BOOLEAN",
            "default": false,
            "nullable": false
          },
          {
            "name": "referralOnly",
            "type": "BOOLEAN",
            "default": false,
            "nullable": false
          }
        ],
        "indexes": [],
        "triggers": []
      },
      {
        "name": "tenancies_vouchers__voucher_assoc",
        "columns": [
          {
            "name": "tenancies_id",
            "type": "UUID",
            "nullable": false,
            "references": "tenancies"
          },
          {
            "name": "vouchers_id",
            "type": "UUID",
            "nullable": false,
            "references": "vouchers"
          }
        ],
        "indexes": [
          {"unique": true, "columns": ["tenancies_id", "vouchers_id"]},
          {"columns": ["tenancies_id"]},
          {"columns": ["vouchers_id"]}
        ],
        "triggers": []
      },
      {
        "name": "vouchers_tenancies__tenancies_assoc",
        "columns": [
          {
            "name": "vouchers_id",
            "type": "UUID",
            "nullable": false,
            "references": "vouchers"
          },
          {
            "name": "tenancies_id",
            "type": "UUID",
            "nullable": false,
            "references": "tenancies"
          }
        ],
        "indexes": [
          {"unique": true, "columns": ["vouchers_id", "tenancies_id"]},
          {"columns": ["vouchers_id"]},
          {"columns": ["tenancies_id"]}
        ],
        "triggers": []
      },
      {
        "name": "messages",
        "columns": [
          {
            "name": "messageText",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {"name": "email", "type": "TEXT", "default": "", "nullable": false},
          {
            "name": "createdAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "nullable": true
          },
          {
            "name": "viewed",
            "type": "BOOLEAN",
            "default": false,
            "nullable": false
          },
          {
            "name": "agentViewed",
            "type": "BOOLEAN",
            "default": false,
            "nullable": false
          }
        ],
        "indexes": [],
        "triggers": []
      },
      {
        "name": "enquiries_messages__messages_assoc",
        "columns": [
          {
            "name": "enquiries_id",
            "type": "UUID",
            "nullable": false,
            "references": "enquiries"
          },
          {
            "name": "messages_id",
            "type": "UUID",
            "nullable": false,
            "references": "messages"
          }
        ],
        "indexes": [
          {"unique": true, "columns": ["enquiries_id", "messages_id"]},
          {"columns": ["enquiries_id"]},
          {"columns": ["messages_id"]}
        ],
        "triggers": []
      },
      {
        "name": "tasks",
        "columns": [
          {
            "name": "machineName",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "interval",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "shouldRunAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "nullable": true
          }
        ],
        "indexes": [],
        "triggers": []
      },
      {
        "name": "referrals",
        "columns": [
          {"name": "email", "type": "TEXT", "default": "", "nullable": false},
          {
            "name": "sentAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "nullable": true
          },
          {"name": "status", "type": "TEXT", "default": "", "nullable": false},
          {"name": "value", "type": "DOUBLE PRECISION", "nullable": true},
          {"name": "type", "type": "TEXT", "default": "", "nullable": false},
          {
            "name": "promoterValue",
            "type": "DOUBLE PRECISION",
            "nullable": true
          },
          {
            "name": "consumed",
            "type": "BOOLEAN",
            "default": false,
            "nullable": false
          },
          {
            "name": "promoterConsumed",
            "type": "BOOLEAN",
            "default": false,
            "nullable": false
          },
          {"name": "source", "type": "TEXT", "default": "", "nullable": false}
        ],
        "indexes": [],
        "triggers": []
      },
      {
        "name": "users_enquiries__enquiries_assoc",
        "columns": [
          {
            "name": "users_id",
            "type": "UUID",
            "nullable": false,
            "references": "users"
          },
          {
            "name": "enquiries_id",
            "type": "UUID",
            "nullable": false,
            "references": "enquiries"
          }
        ],
        "indexes": [
          {"unique": true, "columns": ["users_id", "enquiries_id"]},
          {"columns": ["users_id"]},
          {"columns": ["enquiries_id"]}
        ],
        "triggers": []
      },
      {
        "name": "invitesubpromoters",
        "columns": [
          {"name": "email", "type": "TEXT", "default": "", "nullable": false},
          {
            "name": "promotersId",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {"name": "status", "type": "TEXT", "default": "", "nullable": false}
        ],
        "indexes": [],
        "triggers": []
      },
      {
        "name": "users_invitesubpromoters__invitesubpromoters_assoc",
        "columns": [
          {
            "name": "users_id",
            "type": "UUID",
            "nullable": false,
            "references": "users"
          },
          {
            "name": "invitesubpromoters_id",
            "type": "UUID",
            "nullable": false,
            "references": "invitesubpromoters"
          }
        ],
        "indexes": [
          {"unique": true, "columns": ["users_id", "invitesubpromoters_id"]},
          {"columns": ["users_id"]},
          {"columns": ["invitesubpromoters_id"]}
        ],
        "triggers": []
      },
      {
        "name": "rooms",
        "columns": [
          {
            "name": "startDate",
            "type": "TIMESTAMP WITH TIME ZONE",
            "nullable": true
          },
          {
            "name": "endDate",
            "type": "TIMESTAMP WITH TIME ZONE",
            "nullable": true
          },
          {
            "name": "contractLength",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "available",
            "type": "BOOLEAN",
            "default": false,
            "nullable": false
          },
          {"name": "type", "type": "TEXT", "default": "", "nullable": false},
          {
            "name": "price_pennies",
            "type": "DOUBLE PRECISION",
            "nullable": true
          },
          {
            "name": "pricePer",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {"name": "name", "type": "TEXT", "default": "", "nullable": false},
          {
            "name": "description",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {"name": "beds", "type": "DOUBLE PRECISION", "nullable": true},
          {
            "name": "unavailableReason",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "universityLivingId",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "sturentsSlug",
            "type": "TEXT",
            "default": "",
            "nullable": false
          }
        ],
        "indexes": [
          {
            "where": "\"sturentsSlug\" <> ''",
            "unique": true,
            "columns": ["sturentsSlug"]
          }
        ],
        "triggers": []
      },
      {
        "name": "properties_rooms__rooms_assoc",
        "columns": [
          {
            "name": "properties_id",
            "type": "UUID",
            "nullable": false,
            "references": "properties"
          },
          {
            "name": "rooms_id",
            "type": "UUID",
            "nullable": false,
            "references": "rooms"
          }
        ],
        "indexes": [
          {"unique": true, "columns": ["properties_id", "rooms_id"]},
          {"columns": ["properties_id"]},
          {"columns": ["rooms_id"]}
        ],
        "triggers": []
      },
      {
        "name": "users_messages__messages_assoc",
        "columns": [
          {
            "name": "users_id",
            "type": "UUID",
            "nullable": false,
            "references": "users"
          },
          {
            "name": "messages_id",
            "type": "UUID",
            "nullable": false,
            "references": "messages"
          }
        ],
        "indexes": [
          {"unique": true, "columns": ["users_id", "messages_id"]},
          {"columns": ["users_id"]},
          {"columns": ["messages_id"]}
        ],
        "triggers": []
      },
      {
        "name": "facebook_messages",
        "columns": [
          {"name": "message", "type": "TEXT", "default": "", "nullable": false},
          {
            "name": "updatedAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "nullable": true
          },
          {
            "name": "createdAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "nullable": true
          },
          {
            "name": "messageId",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {"name": "email", "type": "TEXT", "default": "", "nullable": false}
        ],
        "indexes": [],
        "triggers": []
      },
      {
        "name": "users_facebook_messages__facebook_messages_assoc",
        "columns": [
          {
            "name": "users_id",
            "type": "UUID",
            "nullable": false,
            "references": "users"
          },
          {
            "name": "facebook_messages_id",
            "type": "UUID",
            "nullable": false,
            "references": "facebook_messages"
          }
        ],
        "indexes": [
          {"unique": true, "columns": ["users_id", "facebook_messages_id"]},
          {"columns": ["users_id"]},
          {"columns": ["facebook_messages_id"]}
        ],
        "triggers": []
      },
      {
        "name": "enquiries_agents__agent_assoc",
        "columns": [
          {
            "name": "enquiries_id",
            "type": "UUID",
            "nullable": false,
            "references": "enquiries"
          },
          {
            "name": "agents_id",
            "type": "UUID",
            "nullable": false,
            "references": "agents"
          }
        ],
        "indexes": [
          {"unique": true, "columns": ["enquiries_id", "agents_id"]},
          {"columns": ["enquiries_id"]},
          {"columns": ["agents_id"]}
        ],
        "triggers": []
      },
      {
        "name": "enquiries_properties__properties_assoc",
        "columns": [
          {
            "name": "enquiries_id",
            "type": "UUID",
            "nullable": false,
            "references": "enquiries"
          },
          {
            "name": "properties_id",
            "type": "UUID",
            "nullable": false,
            "references": "properties"
          }
        ],
        "indexes": [
          {"unique": true, "columns": ["enquiries_id", "properties_id"]},
          {"columns": ["enquiries_id"]},
          {"columns": ["properties_id"]}
        ],
        "triggers": []
      },
      {
        "name": "transactions",
        "columns": [
          {
            "name": "amountPennies",
            "type": "DOUBLE PRECISION",
            "nullable": true
          },
          {"name": "body", "type": "TEXT", "default": "", "nullable": false},
          {
            "name": "createdAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "nullable": true
          },
          {
            "name": "updatedAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "nullable": true
          },
          {"name": "status", "type": "TEXT", "default": "", "nullable": false}
        ],
        "indexes": [],
        "triggers": []
      },
      {
        "name": "users_transactions__transactions_assoc",
        "columns": [
          {
            "name": "users_id",
            "type": "UUID",
            "nullable": false,
            "references": "users"
          },
          {
            "name": "transactions_id",
            "type": "UUID",
            "nullable": false,
            "references": "transactions"
          }
        ],
        "indexes": [
          {"unique": true, "columns": ["users_id", "transactions_id"]},
          {"columns": ["users_id"]},
          {"columns": ["transactions_id"]}
        ],
        "triggers": []
      },
      {
        "name": "payment_requests",
        "columns": [
          {
            "name": "updatedAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "nullable": true
          },
          {
            "name": "createdAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "nullable": true
          },
          {"name": "body", "type": "TEXT", "default": "", "nullable": false},
          {"name": "status", "type": "TEXT", "default": "", "nullable": false}
        ],
        "indexes": [],
        "triggers": []
      },
      {
        "name": "payment_requests_transactions__transactions_assoc",
        "columns": [
          {
            "name": "payment_requests_id",
            "type": "UUID",
            "nullable": false,
            "references": "payment_requests"
          },
          {
            "name": "transactions_id",
            "type": "UUID",
            "nullable": false,
            "references": "transactions"
          }
        ],
        "indexes": [
          {
            "unique": true,
            "columns": ["payment_requests_id", "transactions_id"]
          },
          {"columns": ["payment_requests_id"]},
          {"columns": ["transactions_id"]}
        ],
        "triggers": []
      },
      {
        "name": "payment_requests_users__user_assoc",
        "columns": [
          {
            "name": "payment_requests_id",
            "type": "UUID",
            "nullable": false,
            "references": "payment_requests"
          },
          {
            "name": "users_id",
            "type": "UUID",
            "nullable": false,
            "references": "users"
          }
        ],
        "indexes": [
          {"unique": true, "columns": ["payment_requests_id", "users_id"]},
          {"columns": ["payment_requests_id"]},
          {"columns": ["users_id"]}
        ],
        "triggers": []
      },
      {
        "name": "premium_listings",
        "columns": [
          {"name": "type", "type": "TEXT", "default": "", "nullable": false},
          {
            "name": "startDate",
            "type": "TIMESTAMP WITH TIME ZONE",
            "nullable": true
          },
          {
            "name": "endDate",
            "type": "TIMESTAMP WITH TIME ZONE",
            "nullable": true
          },
          {"name": "status", "type": "TEXT", "default": "", "nullable": false},
          {
            "name": "reRequestedDate",
            "type": "TIMESTAMP WITH TIME ZONE",
            "nullable": true
          },
          {
            "name": "createdAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "default": {"raw": "NOW()"},
            "nullable": true
          },
          {
            "name": "updatedAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "default": {"raw": "NOW()"},
            "nullable": true
          },
          {"name": "notes", "type": "TEXT", "default": "", "nullable": false},
          {
            "name": "hidden",
            "type": "BOOLEAN",
            "default": false,
            "nullable": false
          }
        ],
        "indexes": [],
        "triggers": []
      },
      {
        "name": "statistics",
        "columns": [
          {
            "name": "jsonData",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "createdAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "nullable": true
          }
        ],
        "indexes": [],
        "triggers": []
      },
      {
        "name": "property_api_tokens",
        "columns": [
          {"name": "token", "type": "TEXT", "default": "", "nullable": false},
          {
            "name": "allAccess",
            "type": "BOOLEAN",
            "default": false,
            "nullable": false
          },
          {"name": "amountUsed", "type": "DOUBLE PRECISION", "nullable": true},
          {"name": "label", "type": "TEXT", "default": "", "nullable": false},
          {
            "name": "nonResoomaAccess",
            "type": "BOOLEAN",
            "default": false,
            "nullable": false
          }
        ],
        "indexes": [],
        "triggers": []
      },
      {
        "name": "properties_premium_listings__premium_listings_assoc",
        "columns": [
          {
            "name": "properties_id",
            "type": "UUID",
            "nullable": false,
            "references": "properties"
          },
          {
            "name": "premium_listings_id",
            "type": "UUID",
            "nullable": false,
            "references": "premium_listings"
          }
        ],
        "indexes": [
          {"unique": true, "columns": ["properties_id", "premium_listings_id"]},
          {"columns": ["properties_id"]},
          {"columns": ["premium_listings_id"]}
        ],
        "triggers": []
      },
      {
        "name": "referral_tokens",
        "columns": [
          {"name": "token", "type": "TEXT", "default": "", "nullable": false}
        ],
        "indexes": [
          {
            "where": "\"token\" <> ''",
            "unique": true,
            "columns": [{"lower": "token"}]
          }
        ],
        "triggers": []
      },
      {
        "name": "referral_tokens_users__user_assoc",
        "columns": [
          {
            "name": "referral_tokens_id",
            "type": "UUID",
            "nullable": false,
            "references": "referral_tokens"
          },
          {
            "name": "users_id",
            "type": "UUID",
            "nullable": false,
            "references": "users"
          }
        ],
        "indexes": [
          {"unique": true, "columns": ["referral_tokens_id", "users_id"]},
          {"columns": ["referral_tokens_id"]},
          {"columns": ["users_id"]}
        ],
        "triggers": []
      },
      {
        "name": "referral_summaries",
        "columns": [
          {
            "name": "startsAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "nullable": true
          },
          {"name": "clicks", "type": "DOUBLE PRECISION", "nullable": true},
          {
            "name": "amountPennies",
            "type": "DOUBLE PRECISION",
            "nullable": true
          },
          {"name": "redemptions", "type": "DOUBLE PRECISION", "nullable": true},
          {
            "name": "createdAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "nullable": true
          },
          {
            "name": "updatedAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "nullable": true
          },
          {"name": "clicksTotal", "type": "DOUBLE PRECISION", "nullable": true},
          {
            "name": "amountPenniesTotal",
            "type": "DOUBLE PRECISION",
            "nullable": true
          },
          {
            "name": "redemptionsTotal",
            "type": "DOUBLE PRECISION",
            "nullable": true
          },
          {
            "name": "clickConversions",
            "type": "DOUBLE PRECISION",
            "nullable": true
          },
          {
            "name": "manualReferrals",
            "type": "DOUBLE PRECISION",
            "nullable": true
          },
          {
            "name": "manualConversions",
            "type": "DOUBLE PRECISION",
            "nullable": true
          },
          {"name": "totalQuotes", "type": "DOUBLE PRECISION", "nullable": true},
          {"name": "paidQuotes", "type": "DOUBLE PRECISION", "nullable": true},
          {
            "name": "completeQuotes",
            "type": "DOUBLE PRECISION",
            "nullable": true
          }
        ],
        "indexes": [],
        "triggers": []
      },
      {
        "name": "users_referral_summaries__referral_summaries_assoc",
        "columns": [
          {
            "name": "users_id",
            "type": "UUID",
            "nullable": false,
            "references": "users"
          },
          {
            "name": "referral_summaries_id",
            "type": "UUID",
            "nullable": false,
            "references": "referral_summaries"
          }
        ],
        "indexes": [
          {"unique": true, "columns": ["users_id", "referral_summaries_id"]},
          {"columns": ["users_id"]},
          {"columns": ["referral_summaries_id"]}
        ],
        "triggers": []
      },
      {
        "name": "favourite_lists",
        "columns": [
          {"name": "name", "type": "TEXT", "default": "", "nullable": false}
        ],
        "indexes": [],
        "triggers": []
      },
      {
        "name": "favourite_lists_users__users_assoc",
        "columns": [
          {
            "name": "favourite_lists_id",
            "type": "UUID",
            "nullable": false,
            "references": "favourite_lists"
          },
          {
            "name": "users_id",
            "type": "UUID",
            "nullable": false,
            "references": "users"
          }
        ],
        "indexes": [
          {"unique": true, "columns": ["favourite_lists_id", "users_id"]},
          {"columns": ["favourite_lists_id"]},
          {"columns": ["users_id"]}
        ],
        "triggers": []
      },
      {
        "name": "favourite_lists_properties__properties_assoc",
        "columns": [
          {
            "name": "favourite_lists_id",
            "type": "UUID",
            "nullable": false,
            "references": "favourite_lists"
          },
          {
            "name": "properties_id",
            "type": "UUID",
            "nullable": false,
            "references": "properties"
          }
        ],
        "indexes": [
          {"unique": true, "columns": ["favourite_lists_id", "properties_id"]},
          {"columns": ["favourite_lists_id"]},
          {"columns": ["properties_id"]}
        ],
        "triggers": []
      },
      {
        "name": "error_logs",
        "columns": [
          {"name": "url", "type": "TEXT", "default": "", "nullable": false},
          {
            "name": "dataJSON",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "createdAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "nullable": true
          },
          {
            "name": "updatedAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "nullable": true
          }
        ],
        "indexes": [],
        "triggers": []
      },
      {
        "name": "internet_services",
        "columns": [
          {
            "name": "createdAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "nullable": true
          },
          {
            "name": "updatedAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "nullable": true
          },
          {"name": "name", "type": "TEXT", "default": "", "nullable": false},
          {
            "name": "pricePennies",
            "type": "DOUBLE PRECISION",
            "nullable": true
          },
          {"name": "body", "type": "TEXT", "default": "", "nullable": false}
        ],
        "indexes": [],
        "triggers": []
      },
      {
        "name": "meter_readings",
        "columns": [
          {
            "name": "createdAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "nullable": true
          },
          {
            "name": "updatedAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "nullable": true
          },
          {
            "name": "electricReading",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "gasReading",
            "type": "TEXT",
            "default": "",
            "nullable": false
          }
        ],
        "indexes": [],
        "triggers": []
      },
      {
        "name": "meter_readings_contracts__contract_assoc",
        "columns": [
          {
            "name": "meter_readings_id",
            "type": "UUID",
            "nullable": false,
            "references": "meter_readings"
          },
          {
            "name": "contracts_id",
            "type": "UUID",
            "nullable": false,
            "references": "contracts"
          }
        ],
        "indexes": [
          {"unique": true, "columns": ["meter_readings_id", "contracts_id"]},
          {"columns": ["meter_readings_id"]},
          {"columns": ["contracts_id"]}
        ],
        "triggers": []
      },
      {
        "name": "users_error_logs__errorLogs_assoc",
        "columns": [
          {
            "name": "users_id",
            "type": "UUID",
            "nullable": false,
            "references": "users"
          },
          {
            "name": "error_logs_id",
            "type": "UUID",
            "nullable": false,
            "references": "error_logs"
          }
        ],
        "indexes": [
          {"unique": true, "columns": ["users_id", "error_logs_id"]},
          {"columns": ["users_id"]},
          {"columns": ["error_logs_id"]}
        ],
        "triggers": []
      },
      {
        "name": "agent_reviews",
        "columns": [
          {"name": "name", "type": "TEXT", "default": "", "nullable": false},
          {"name": "email", "type": "TEXT", "default": "", "nullable": false},
          {"name": "rating", "type": "DOUBLE PRECISION", "nullable": true},
          {"name": "body", "type": "TEXT", "default": "", "nullable": false},
          {
            "name": "status",
            "type": "TEXT",
            "default": "awaiting_approval",
            "nullable": false
          },
          {
            "name": "createdAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "nullable": true
          },
          {
            "name": "updatedAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "nullable": true
          }
        ],
        "indexes": [],
        "triggers": []
      },
      {
        "name": "agent_reviews_agents__agent_assoc",
        "columns": [
          {
            "name": "agent_reviews_id",
            "type": "UUID",
            "nullable": false,
            "references": "agent_reviews"
          },
          {
            "name": "agents_id",
            "type": "UUID",
            "nullable": false,
            "references": "agents"
          }
        ],
        "indexes": [
          {"unique": true, "columns": ["agent_reviews_id", "agents_id"]},
          {"columns": ["agent_reviews_id"]},
          {"columns": ["agents_id"]}
        ],
        "triggers": []
      },
      {
        "name": "agent_reviews_users__user_assoc",
        "columns": [
          {
            "name": "agent_reviews_id",
            "type": "UUID",
            "nullable": false,
            "references": "agent_reviews"
          },
          {
            "name": "users_id",
            "type": "UUID",
            "nullable": false,
            "references": "users"
          }
        ],
        "indexes": [
          {"unique": true, "columns": ["agent_reviews_id", "users_id"]},
          {"columns": ["agent_reviews_id"]},
          {"columns": ["users_id"]}
        ],
        "triggers": []
      },
      {
        "name": "logs",
        "columns": [
          {
            "name": "createdAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "nullable": true
          },
          {
            "name": "updatedAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "nullable": true
          },
          {"name": "body", "type": "TEXT", "default": "", "nullable": false},
          {
            "name": "recordType",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {"name": "recordId", "type": "TEXT", "default": "", "nullable": false}
        ],
        "indexes": [],
        "triggers": []
      },
      {
        "name": "logs_users__user_assoc",
        "columns": [
          {
            "name": "logs_id",
            "type": "UUID",
            "nullable": false,
            "references": "logs"
          },
          {
            "name": "users_id",
            "type": "UUID",
            "nullable": false,
            "references": "users"
          }
        ],
        "indexes": [
          {"unique": true, "columns": ["logs_id", "users_id"]},
          {"columns": ["logs_id"]},
          {"columns": ["users_id"]}
        ],
        "triggers": []
      },
      {
        "name": "textMessages",
        "columns": [
          {"name": "to", "type": "TEXT", "default": "", "nullable": false},
          {"name": "body", "type": "TEXT", "default": "", "nullable": false},
          {
            "name": "createdAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "default": {"raw": "NOW()"},
            "nullable": true
          },
          {
            "name": "updatedAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "default": {"raw": "NOW()"},
            "nullable": true
          },
          {
            "name": "failedToSend",
            "type": "BOOLEAN",
            "default": false,
            "nullable": false
          }
        ],
        "indexes": [],
        "triggers": []
      },
      {
        "name": "textMessages_textMessages__root_assoc",
        "columns": [
          {
            "name": "textMessages_id",
            "type": "UUID",
            "nullable": false,
            "references": "textMessages"
          },
          {
            "name": "textMessages_id_2",
            "type": "UUID",
            "nullable": false,
            "references": "textMessages"
          }
        ],
        "indexes": [
          {"unique": true, "columns": ["textMessages_id", "textMessages_id_2"]},
          {"columns": ["textMessages_id"]},
          {"columns": ["textMessages_id_2"]}
        ],
        "triggers": []
      },
      {
        "name": "emails",
        "columns": [
          {"name": "to", "type": "TEXT", "default": "", "nullable": false},
          {"name": "from", "type": "TEXT", "default": "", "nullable": false},
          {"name": "subject", "type": "TEXT", "default": "", "nullable": false},
          {"name": "body", "type": "TEXT", "default": "", "nullable": false},
          {
            "name": "createdAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "default": {"raw": "NOW()"},
            "nullable": true
          },
          {
            "name": "updatedAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "default": {"raw": "NOW()"},
            "nullable": true
          },
          {
            "name": "failedToSend",
            "type": "BOOLEAN",
            "default": false,
            "nullable": false
          },
          {
            "name": "originalEmailContent",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "googleId",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "incoming",
            "type": "BOOLEAN",
            "default": false,
            "nullable": false
          },
          {"name": "toName", "type": "TEXT", "default": "", "nullable": false},
          {
            "name": "fromName",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "replyName",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "replyEmail",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "metaData",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "outgoingToEmail",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "outgoingToName",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "outgoingFromName",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "outgoingFromEmail",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "outgoingReplyToEmail",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "outgoingReplyToName",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "outgoingSubject",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "outgoingBody",
            "type": "TEXT",
            "default": "",
            "nullable": false
          }
        ],
        "indexes": [
          {
            "where": "\"googleId\" <> ''",
            "unique": true,
            "columns": ["googleId"]
          }
        ],
        "triggers": []
      },
      {
        "name": "emails_emails__root_assoc",
        "columns": [
          {
            "name": "emails_id",
            "type": "UUID",
            "nullable": false,
            "references": "emails"
          },
          {
            "name": "emails_id_2",
            "type": "UUID",
            "nullable": false,
            "references": "emails"
          }
        ],
        "indexes": [
          {"unique": true, "columns": ["emails_id", "emails_id_2"]},
          {"columns": ["emails_id"]},
          {"columns": ["emails_id_2"]}
        ],
        "triggers": []
      },
      {
        "name": "emails_emails__parent_assoc",
        "columns": [
          {
            "name": "emails_id",
            "type": "UUID",
            "nullable": false,
            "references": "emails"
          },
          {
            "name": "emails_id_2",
            "type": "UUID",
            "nullable": false,
            "references": "emails"
          }
        ],
        "indexes": [
          {"unique": true, "columns": ["emails_id", "emails_id_2"]},
          {"columns": ["emails_id"]},
          {"columns": ["emails_id_2"]}
        ],
        "triggers": []
      },
      {
        "name": "properties_no_results_requests",
        "columns": [
          {"name": "email", "type": "TEXT", "default": "", "nullable": false},
          {"name": "link", "type": "TEXT", "default": "", "nullable": false},
          {
            "name": "linkParam",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "createdAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "nullable": true
          },
          {
            "name": "updatedAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "nullable": true
          }
        ],
        "indexes": [],
        "triggers": []
      },
      {
        "name": "properties_no_results_requests_users__user_assoc",
        "columns": [
          {
            "name": "properties_no_results_requests_id",
            "type": "UUID",
            "nullable": false,
            "references": "properties_no_results_requests"
          },
          {
            "name": "users_id",
            "type": "UUID",
            "nullable": false,
            "references": "users"
          }
        ],
        "indexes": [
          {
            "unique": true,
            "columns": ["properties_no_results_requests_id", "users_id"]
          },
          {"columns": ["properties_no_results_requests_id"]},
          {"columns": ["users_id"]}
        ],
        "triggers": []
      },
      {
        "name": "enquiries_rooms__rooms_assoc",
        "columns": [
          {
            "name": "enquiries_id",
            "type": "UUID",
            "nullable": false,
            "references": "enquiries"
          },
          {
            "name": "rooms_id",
            "type": "UUID",
            "nullable": false,
            "references": "rooms"
          }
        ],
        "indexes": [
          {"unique": true, "columns": ["enquiries_id", "rooms_id"]},
          {"columns": ["enquiries_id"]},
          {"columns": ["rooms_id"]}
        ],
        "triggers": []
      },
      {
        "name": "referrals_users__referringUser_assoc",
        "columns": [
          {
            "name": "referrals_id",
            "type": "UUID",
            "nullable": false,
            "references": "referrals"
          },
          {
            "name": "users_id",
            "type": "UUID",
            "nullable": false,
            "references": "users"
          }
        ],
        "indexes": [
          {"unique": true, "columns": ["referrals_id", "users_id"]},
          {"columns": ["referrals_id"]},
          {"columns": ["users_id"]}
        ],
        "triggers": []
      },
      {
        "name": "bookings",
        "columns": [
          {
            "name": "createdAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "default": {"raw": "NOW()"},
            "nullable": true
          },
          {
            "name": "updatedAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "default": {"raw": "NOW()"},
            "nullable": true
          },
          {"name": "when", "type": "TIMESTAMP WITH TIME ZONE", "nullable": true}
        ],
        "indexes": [],
        "triggers": []
      },
      {
        "name": "bookings_properties__property_assoc",
        "columns": [
          {
            "name": "bookings_id",
            "type": "UUID",
            "nullable": false,
            "references": "bookings"
          },
          {
            "name": "properties_id",
            "type": "UUID",
            "nullable": false,
            "references": "properties"
          }
        ],
        "indexes": [
          {"unique": true, "columns": ["bookings_id", "properties_id"]},
          {"columns": ["bookings_id"]},
          {"columns": ["properties_id"]}
        ],
        "triggers": []
      },
      {
        "name": "bookings_rooms__room_assoc",
        "columns": [
          {
            "name": "bookings_id",
            "type": "UUID",
            "nullable": false,
            "references": "bookings"
          },
          {
            "name": "rooms_id",
            "type": "UUID",
            "nullable": false,
            "references": "rooms"
          }
        ],
        "indexes": [
          {"unique": true, "columns": ["bookings_id", "rooms_id"]},
          {"columns": ["bookings_id"]},
          {"columns": ["rooms_id"]}
        ],
        "triggers": []
      },
      {
        "name": "bookings_users__users_assoc",
        "columns": [
          {
            "name": "bookings_id",
            "type": "UUID",
            "nullable": false,
            "references": "bookings"
          },
          {
            "name": "users_id",
            "type": "UUID",
            "nullable": false,
            "references": "users"
          }
        ],
        "indexes": [
          {"unique": true, "columns": ["bookings_id", "users_id"]},
          {"columns": ["bookings_id"]},
          {"columns": ["users_id"]}
        ],
        "triggers": []
      },
      {
        "name": "bookings_enquiries__enquiry_assoc",
        "columns": [
          {
            "name": "bookings_id",
            "type": "UUID",
            "nullable": false,
            "references": "bookings"
          },
          {
            "name": "enquiries_id",
            "type": "UUID",
            "nullable": false,
            "references": "enquiries"
          }
        ],
        "indexes": [
          {"unique": true, "columns": ["bookings_id", "enquiries_id"]},
          {"columns": ["bookings_id"]},
          {"columns": ["enquiries_id"]}
        ],
        "triggers": []
      },
      {
        "name": "bookingTimes",
        "columns": [
          {
            "name": "createdAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "default": {"raw": "NOW()"},
            "nullable": true
          },
          {
            "name": "updatedAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "default": {"raw": "NOW()"},
            "nullable": true
          },
          {
            "name": "when",
            "type": "TIMESTAMP WITH TIME ZONE",
            "nullable": true
          },
          {
            "name": "status",
            "type": "TEXT",
            "default": "pending",
            "nullable": false
          }
        ],
        "indexes": [],
        "triggers": []
      },
      {
        "name": "bookings_bookingTimes__bookingTimes_assoc",
        "columns": [
          {
            "name": "bookings_id",
            "type": "UUID",
            "nullable": false,
            "references": "bookings"
          },
          {
            "name": "bookingTimes_id",
            "type": "UUID",
            "nullable": false,
            "references": "bookingTimes"
          }
        ],
        "indexes": [
          {"unique": true, "columns": ["bookings_id", "bookingTimes_id"]},
          {"columns": ["bookings_id"]},
          {"columns": ["bookingTimes_id"]}
        ],
        "triggers": []
      },
      {
        "name": "agents_emails__emails_assoc",
        "columns": [
          {
            "name": "agents_id",
            "type": "UUID",
            "nullable": false,
            "references": "agents"
          },
          {
            "name": "emails_id",
            "type": "UUID",
            "nullable": false,
            "references": "emails"
          }
        ],
        "indexes": [
          {"unique": true, "columns": ["agents_id", "emails_id"]},
          {"columns": ["agents_id"]},
          {"columns": ["emails_id"]}
        ],
        "triggers": []
      },
      {
        "name": "googleRefreshTokens",
        "columns": [
          {"name": "token", "type": "TEXT", "default": "", "nullable": false}
        ],
        "indexes": [],
        "triggers": []
      },
      {
        "name": "emails_enquiries__enquiry_assoc",
        "columns": [
          {
            "name": "emails_id",
            "type": "UUID",
            "nullable": false,
            "references": "emails"
          },
          {
            "name": "enquiries_id",
            "type": "UUID",
            "nullable": false,
            "references": "enquiries"
          }
        ],
        "indexes": [
          {"unique": true, "columns": ["emails_id", "enquiries_id"]},
          {"columns": ["emails_id"]},
          {"columns": ["enquiries_id"]}
        ],
        "triggers": []
      },
      {
        "name": "cityInfo",
        "columns": [
          {"name": "averageBill", "type": "DOUBLE PRECISION", "nullable": true},
          {
            "name": "averageHallsRent",
            "type": "DOUBLE PRECISION",
            "nullable": true
          },
          {
            "name": "priceOfABeer",
            "type": "DOUBLE PRECISION",
            "nullable": true
          },
          {"name": "averageRent", "type": "DOUBLE PRECISION", "nullable": true},
          {
            "name": "seeAllAccommodationLink",
            "type": "TEXT",
            "default": "",
            "nullable": false
          }
        ],
        "indexes": [],
        "triggers": []
      },
      {
        "name": "cityInfo_pages__page_assoc",
        "columns": [
          {
            "name": "cityInfo_id",
            "type": "UUID",
            "nullable": false,
            "references": "cityInfo"
          },
          {
            "name": "pages_id",
            "type": "UUID",
            "nullable": false,
            "references": "pages"
          }
        ],
        "indexes": [
          {"unique": true, "columns": ["cityInfo_id", "pages_id"]},
          {"columns": ["cityInfo_id"]},
          {"columns": ["pages_id"]}
        ],
        "triggers": []
      },
      {
        "name": "cityInfoSearchLinks",
        "columns": [
          {"name": "section", "type": "TEXT", "default": "", "nullable": false},
          {"name": "to", "type": "TEXT", "default": "", "nullable": false},
          {"name": "content", "type": "TEXT", "default": "", "nullable": false}
        ],
        "indexes": [],
        "triggers": []
      },
      {
        "name": "cityInfoSearchLinks_cityInfo__cityInfo_assoc",
        "columns": [
          {
            "name": "cityInfoSearchLinks_id",
            "type": "UUID",
            "nullable": false,
            "references": "cityInfoSearchLinks"
          },
          {
            "name": "cityInfo_id",
            "type": "UUID",
            "nullable": false,
            "references": "cityInfo"
          }
        ],
        "indexes": [
          {
            "unique": true,
            "columns": ["cityInfoSearchLinks_id", "cityInfo_id"]
          },
          {"columns": ["cityInfoSearchLinks_id"]},
          {"columns": ["cityInfo_id"]}
        ],
        "triggers": []
      },
      {
        "name": "referrals_tenancies__tenancy_assoc",
        "columns": [
          {
            "name": "referrals_id",
            "type": "UUID",
            "nullable": false,
            "references": "referrals"
          },
          {
            "name": "tenancies_id",
            "type": "UUID",
            "nullable": false,
            "references": "tenancies"
          }
        ],
        "indexes": [
          {"unique": true, "columns": ["referrals_id", "tenancies_id"]},
          {"columns": ["referrals_id"]},
          {"columns": ["tenancies_id"]}
        ],
        "triggers": []
      },
      {
        "name": "installments",
        "columns": [
          {
            "name": "date",
            "type": "TIMESTAMP WITH TIME ZONE",
            "nullable": true
          },
          {
            "name": "amountPennies",
            "type": "DOUBLE PRECISION",
            "nullable": false
          },
          {
            "name": "refundedPennies",
            "type": "DOUBLE PRECISION",
            "default": 0,
            "nullable": false
          },
          {
            "name": "refundedAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "nullable": true
          },
          {
            "name": "createdAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "default": {"raw": "NOW()"},
            "nullable": true
          },
          {
            "name": "updatedAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "default": {"raw": "NOW()"},
            "nullable": true
          },
          {
            "name": "paidAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "nullable": true
          },
          {
            "name": "stripeChargeId",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {
            "name": "feeAmountPennies",
            "type": "DOUBLE PRECISION",
            "default": 0,
            "nullable": false
          }
        ],
        "indexes": [],
        "triggers": []
      },
      {
        "name": "installments_tenancies__tenancy_assoc",
        "columns": [
          {
            "name": "installments_id",
            "type": "UUID",
            "nullable": false,
            "references": "installments"
          },
          {
            "name": "tenancies_id",
            "type": "UUID",
            "nullable": false,
            "references": "tenancies"
          }
        ],
        "indexes": [
          {"unique": true, "columns": ["installments_id", "tenancies_id"]},
          {"columns": ["installments_id"]},
          {"columns": ["tenancies_id"]}
        ],
        "triggers": []
      },
      {
        "name": "cityInfo_agents__agents_assoc",
        "columns": [
          {
            "name": "cityInfo_id",
            "type": "UUID",
            "nullable": false,
            "references": "cityInfo"
          },
          {
            "name": "agents_id",
            "type": "UUID",
            "nullable": false,
            "references": "agents"
          }
        ],
        "indexes": [
          {"unique": true, "columns": ["cityInfo_id", "agents_id"]},
          {"columns": ["cityInfo_id"]},
          {"columns": ["agents_id"]}
        ],
        "triggers": []
      },
      {
        "name": "cityInfo_blogPosts__blogs_assoc",
        "columns": [
          {
            "name": "cityInfo_id",
            "type": "UUID",
            "nullable": false,
            "references": "cityInfo"
          },
          {
            "name": "blogPosts_id",
            "type": "UUID",
            "nullable": false,
            "references": "blogPosts"
          }
        ],
        "indexes": [
          {"unique": true, "columns": ["cityInfo_id", "blogPosts_id"]},
          {"columns": ["cityInfo_id"]},
          {"columns": ["blogPosts_id"]}
        ],
        "triggers": []
      },
      {
        "name": "propertySearches",
        "columns": [
          {
            "name": "createdAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "default": {"raw": "NOW()"},
            "nullable": true
          },
          {
            "name": "updatedAt",
            "type": "TIMESTAMP WITH TIME ZONE",
            "default": {"raw": "NOW()"},
            "nullable": true
          },
          {"name": "minPrice", "type": "DOUBLE PRECISION", "nullable": true},
          {"name": "maxPrice", "type": "DOUBLE PRECISION", "nullable": true},
          {"name": "minBeds", "type": "DOUBLE PRECISION", "nullable": true},
          {"name": "maxBeds", "type": "DOUBLE PRECISION", "nullable": true},
          {
            "name": "minBathrooms",
            "type": "DOUBLE PRECISION",
            "nullable": true
          },
          {
            "name": "maxBathrooms",
            "type": "DOUBLE PRECISION",
            "nullable": true
          },
          {
            "name": "propertyType",
            "type": "TEXT",
            "default": "",
            "nullable": false
          },
          {"name": "lat", "type": "DOUBLE PRECISION", "nullable": true},
          {"name": "lng", "type": "DOUBLE PRECISION", "nullable": true},
          {
            "name": "vr",
            "type": "BOOLEAN",
            "default": false,
            "nullable": false
          },
          {"name": "sort", "type": "TEXT", "default": "", "nullable": false},
          {"name": "query", "type": "TEXT", "default": "", "nullable": false},
          {
            "name": "saved",
            "type": "BOOLEAN",
            "default": false,
            "nullable": false
          },
          {"name": "resultCount", "type": "DOUBLE PRECISION", "nullable": true},
          {"name": "distance", "type": "DOUBLE PRECISION", "nullable": true},
          {"name": "images", "type": "TEXT", "default": "", "nullable": false}
        ],
        "indexes": [],
        "triggers": []
      },
      {
        "name": "propertySearches_users__user_assoc",
        "columns": [
          {
            "name": "propertySearches_id",
            "type": "UUID",
            "nullable": false,
            "references": "propertySearches"
          },
          {
            "name": "users_id",
            "type": "UUID",
            "nullable": false,
            "references": "users"
          }
        ],
        "indexes": [
          {"unique": true, "columns": ["propertySearches_id", "users_id"]},
          {"columns": ["propertySearches_id"]},
          {"columns": ["users_id"]}
        ],
        "triggers": []
      }
    ],
    "functions": []
  },
  "models": [
    {
      "name": "images",
      "scopes": [],
      "tableName": "images",
      "attributes": [
        {
          "data": {"default": {"now": true}},
          "name": "createdAt",
          "type": "date"
        },
        {
          "data": {"default": {"now": true}},
          "name": "updatedAt",
          "type": "date"
        },
        {"name": "deletedAt", "type": "date"},
        {"name": "reference", "type": "string"},
        {"name": "alt", "type": "string"},
        {"name": "uid", "type": "uuid"}
      ]
    },
    {
      "name": "providers",
      "scopes": [
        {
          "name": "search",
          "query": {"or": [{"like": [{"attr": "name"}, {"param": "query"}]}]},
          "params": [{"name": "query", "type": "string"}]
        }
      ],
      "tableName": "providers",
      "attributes": [
        {
          "data": {"default": {"now": true}},
          "name": "createdAt",
          "type": "date"
        },
        {
          "data": {"default": {"now": true}},
          "name": "updatedAt",
          "type": "date"
        },
        {"name": "deletedAt", "type": "date"},
        {"name": "name", "type": "string"},
        {"name": "userName", "type": "string"},
        {
          "data": {
            "many": true,
            "model": "properties",
            "ownKey": "providerId",
            "tableName": "properties",
            "foreignKey": "id"
          },
          "name": "properties",
          "type": "association"
        }
      ]
    },
    {
      "name": "pages",
      "scopes": [
        {
          "name": "withSlug",
          "query": {"eq": [{"attr": "slug"}, {"param": "slug"}]},
          "params": [{"name": "slug", "type": "string"}]
        }
      ],
      "tableName": "pages",
      "attributes": [
        {
          "data": {"default": {"now": true}},
          "name": "createdAt",
          "type": "date"
        },
        {
          "data": {"default": {"now": true}},
          "name": "updatedAt",
          "type": "date"
        },
        {"name": "deletedAt", "type": "date"},
        {"name": "title", "type": "string"},
        {"name": "pageTitle", "type": "string"},
        {"name": "metaDesc", "type": "string"},
        {"name": "slug", "type": "string"},
        {"name": "body", "type": "string"},
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "template",
          "type": "string"
        },
        {"data": {"many": false}, "name": "image", "type": "image"},
        {"data": {}, "name": "lat", "type": "number"},
        {"data": {}, "name": "lng", "type": "number"},
        {
          "data": {
            "many": false,
            "model": "cityInfo",
            "ownKey": "pages_id",
            "inverseOf": "page",
            "tableName": "cityInfo_pages__page_assoc",
            "foreignKey": "cityInfo_id"
          },
          "name": "cityInfo",
          "type": "association"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "northBound",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "eastBound",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "southBound",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "westBound",
          "type": "string"
        }
      ]
    },
    {
      "name": "propertyViews",
      "scopes": [],
      "tableName": "propertyViews",
      "attributes": [
        {
          "data": {
            "many": false,
            "model": "users",
            "ownKey": "id",
            "tableName": "propertyViews",
            "foreignKey": "userId"
          },
          "name": "user",
          "type": "association"
        },
        {
          "data": {
            "many": false,
            "model": "properties",
            "ownKey": "propertyViewsId",
            "tableName": "property-propertyViews--association",
            "foreignKey": "propertiesId"
          },
          "name": "property",
          "type": "association"
        },
        {
          "data": {"default": {"now": true}},
          "name": "createdAt",
          "type": "date"
        },
        {
          "data": {"default": {"now": true}},
          "name": "updatedAt",
          "type": "date"
        },
        {"name": "deletedAt", "type": "date"}
      ]
    },
    {
      "name": "mediaTags",
      "scopes": [
        {
          "name": "livingRoomTags",
          "query": {"eq": [{"attr": "name"}, {"value": "living room"}]}
        },
        {
          "name": "propertyTags",
          "query": {"eq": [{"attr": "name"}, {"value": "property"}]}
        }
      ],
      "tableName": "mediaTags",
      "attributes": [{"name": "name", "type": "string"}]
    },
    {
      "name": "mediaTaggings",
      "scopes": [
        {
          "name": "livingRoomTaggings",
          "query": {
            "in": [
              {"attr": "mediaTag"},
              {
                "query": {
                  "model": "mediaTags",
                  "filter": {"scope": "livingRoomTags"}
                }
              }
            ]
          }
        },
        {
          "name": "propertyTaggings",
          "query": {
            "in": [
              {"attr": "mediaTag"},
              {
                "query": {
                  "model": "mediaTags",
                  "filter": {"scope": "propertyTags"}
                }
              }
            ]
          }
        }
      ],
      "tableName": "mediaTaggings",
      "attributes": [
        {
          "data": {
            "many": false,
            "model": "mediaTags",
            "ownKey": "id",
            "tableName": "mediaTaggings",
            "foreignKey": "mediaTagId"
          },
          "name": "mediaTag",
          "type": "association"
        },
        {
          "data": {
            "many": false,
            "model": "propertyAttachments",
            "ownKey": "id",
            "tableName": "mediaTaggings",
            "foreignKey": "propertyAttachmentId"
          },
          "name": "propertyAttachment",
          "type": "association"
        },
        {"name": "score", "type": "number"}
      ]
    },
    {
      "name": "properties",
      "scopes": [
        {
          "name": "withSlug",
          "query": {"eq": [{"attr": "slug"}, {"param": "slug"}]},
          "params": [{"name": "slug", "type": "string"}]
        },
        {
          "name": "withAgentId",
          "query": {"eq": [{"attr": "agentId"}, {"param": "agentId"}]},
          "params": [{"name": "agentId", "type": "string"}]
        },
        {
          "name": "search",
          "query": {
            "or": [
              {"like": [{"attr": "name"}, {"param": "query"}]},
              {"like": [{"attr": "town"}, {"param": "query"}]},
              {"like": [{"attr": "type"}, {"param": "query"}]},
              {"like": [{"attr": "slug"}, {"param": "query"}]}
            ]
          },
          "params": [{"name": "query", "type": "string"}]
        },
        {
          "name": "isPublished",
          "query": {"eq": [{"attr": "published"}, {"value": true}]}
        }
      ],
      "tableName": "properties",
      "attributes": [
        {
          "data": {"default": {"now": true}},
          "name": "createdAt",
          "type": "date"
        },
        {
          "data": {"default": {"now": true}},
          "name": "updatedAt",
          "type": "date"
        },
        {"name": "deletedAt", "type": "date"},
        {"name": "agentId", "type": "string"},
        {"name": "vr", "type": "string"},
        {
          "data": {
            "many": false,
            "model": "providers",
            "ownKey": "id",
            "tableName": "properties",
            "foreignKey": "providerId"
          },
          "name": "provider",
          "type": "association"
        },
        {
          "data": {
            "many": false,
            "model": "agents",
            "ownKey": "id",
            "tableName": "properties",
            "foreignKey": "agentId"
          },
          "name": "agent",
          "type": "association"
        },
        {
          "data": {
            "many": true,
            "model": "propertyAttachments",
            "ownKey": "propertyId",
            "tableName": "propertyAttachments",
            "foreignKey": "id"
          },
          "name": "propertyAttachments",
          "type": "association"
        },
        {
          "data": {
            "many": true,
            "model": "propertyViews",
            "ownKey": "propertiesId",
            "tableName": "property-propertyViews--association",
            "foreignKey": "propertyViewsId"
          },
          "name": "propertyViews",
          "type": "association"
        },
        {"name": "blmRef", "type": "string"},
        {"name": "branchRef", "type": "string"},
        {"name": "type", "type": "string"},
        {"data": {"required": true}, "name": "name", "type": "string"},
        {"data": {"unique": true}, "name": "slug", "type": "string"},
        {"name": "body", "type": "string"},
        {"name": "summary", "type": "string"},
        {"name": "published", "type": "boolean"},
        {"name": "pricePer", "type": "string"},
        {"name": "pricePennies", "type": "number"},
        {"name": "depositPennies", "type": "number"},
        {"name": "availableAt", "type": "date"},
        {"name": "contractMonths", "type": "number"},
        {"name": "features", "type": "string"},
        {"name": "adminFees", "type": "string"},
        {"name": "beds", "type": "number"},
        {"name": "bathrooms", "type": "number"},
        {"name": "addressLine1", "type": "string"},
        {"name": "addressLine2", "type": "string"},
        {"name": "addressLine3", "type": "string"},
        {"name": "addressLine4", "type": "string"},
        {"name": "town", "type": "string"},
        {"name": "postcode", "type": "string"},
        {"name": "lat", "type": "number"},
        {"name": "lng", "type": "number"},
        {"data": {"many": true}, "name": "images", "type": "image"},
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "bulletPointsJSON",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "iconsJSON",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "unpublishReason",
          "type": "string"
        },
        {
          "data": {
            "many": true,
            "model": "rooms",
            "ownKey": "properties_id",
            "tableName": "properties_rooms__rooms_assoc",
            "foreignKey": "rooms_id"
          },
          "name": "rooms",
          "type": "association"
        },
        {
          "data": {
            "many": true,
            "model": "enquiries",
            "ownKey": "properties_id",
            "inverseOf": "properties",
            "tableName": "enquiries_properties__properties_assoc",
            "foreignKey": "enquiries_id"
          },
          "name": "enquiries",
          "type": "association"
        },
        {"data": {}, "name": "hidden", "type": "boolean"},
        {
          "data": {
            "many": true,
            "model": "premium_listings",
            "ownKey": "properties_id",
            "tableName": "properties_premium_listings__premium_listings_assoc",
            "foreignKey": "premium_listings_id"
          },
          "name": "premium_listings",
          "type": "association"
        },
        {"data": {}, "name": "noDeposit", "type": "boolean"},
        {"data": {}, "name": "bikeStorage", "type": "boolean"},
        {"data": {}, "name": "houseShare", "type": "boolean"},
        {"data": {}, "name": "washingMachine", "type": "boolean"},
        {"data": {}, "name": "dishWasher", "type": "boolean"},
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "universityLivingSlug",
          "type": "string"
        },
        {
          "data": {
            "unique": true,
            "preserveCase": true,
            "caseInsensitive": false
          },
          "name": "sturentsId",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "owner",
          "type": "string"
        },
        {"data": {}, "name": "roomCount", "type": "number"},
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "origin",
          "type": "string"
        },
        {
          "data": {
            "many": true,
            "model": "bookings",
            "ownKey": "properties_id",
            "inverseOf": "property",
            "tableName": "bookings_properties__property_assoc",
            "foreignKey": "bookings_id"
          },
          "name": "bookings",
          "type": "association"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "nearestPlacesData",
          "type": "string"
        }
      ]
    },
    {
      "name": "agents",
      "scopes": [
        {
          "name": "search",
          "query": {
            "or": [
              {"like": [{"attr": "name"}, {"param": "query"}]},
              {"like": [{"attr": "phone"}, {"param": "query"}]},
              {"like": [{"attr": "email"}, {"param": "query"}]},
              {"like": [{"attr": "postcode"}, {"param": "query"}]}
            ]
          },
          "params": [{"name": "query", "type": "string"}]
        }
      ],
      "tableName": "agents",
      "attributes": [
        {
          "data": {"default": {"now": true}},
          "name": "createdAt",
          "type": "date"
        },
        {
          "data": {"default": {"now": true}},
          "name": "updatedAt",
          "type": "date"
        },
        {"name": "deletedAt", "type": "date"},
        {"name": "providerId", "type": "string"},
        {"data": {"required": true}, "name": "name", "type": "string"},
        {
          "data": {"required": true, "caseInsensitive": true},
          "name": "email",
          "type": "string"
        },
        {"name": "phone", "type": "string"},
        {"name": "trackingPhone", "type": "string"},
        {"name": "bio", "type": "string"},
        {"name": "branchId", "type": "string"},
        {"name": "addressLine1", "type": "string"},
        {"name": "addressLine2", "type": "string"},
        {"name": "addressLine3", "type": "string"},
        {"name": "addressLine4", "type": "string"},
        {"name": "town", "type": "string"},
        {"name": "postcode", "type": "string"},
        {"name": "lat", "type": "number"},
        {"name": "lng", "type": "number"},
        {"name": "legacyAddress", "type": "string"},
        {"name": "legacyMediaRef", "type": "string"},
        {
          "data": {
            "many": true,
            "model": "properties",
            "ownKey": "agentId",
            "tableName": "properties",
            "foreignKey": "id"
          },
          "name": "properties",
          "type": "association"
        },
        {
          "data": {
            "many": true,
            "model": "users",
            "ownKey": "agentsId",
            "tableName": "agents-users--association",
            "foreignKey": "usersId"
          },
          "name": "users",
          "type": "association"
        },
        {"data": {"many": false}, "name": "image", "type": "image"},
        {"data": {}, "name": "phoneClickedCount", "type": "number"},
        {
          "data": {
            "many": true,
            "model": "enquiries",
            "ownKey": "agents_id",
            "inverseOf": "agent",
            "tableName": "enquiries_agents__agent_assoc",
            "foreignKey": "enquiries_id"
          },
          "name": "enquiries",
          "type": "association"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "googleSheetId",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "contactName",
          "type": "string"
        },
        {
          "data": {
            "many": true,
            "model": "agent_reviews",
            "ownKey": "agents_id",
            "inverseOf": "agent",
            "tableName": "agent_reviews_agents__agent_assoc",
            "foreignKey": "agent_reviews_id"
          },
          "name": "agent_reviews",
          "type": "association"
        },
        {
          "data": {
            "many": true,
            "model": "emails",
            "ownKey": "agents_id",
            "tableName": "agents_emails__emails_assoc",
            "foreignKey": "emails_id"
          },
          "name": "emails",
          "type": "association"
        },
        {"data": {}, "name": "googleRating", "type": "number"},
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "googleUrl",
          "type": "string"
        }
      ]
    },
    {
      "name": "enquiries",
      "scopes": [
        {
          "name": "search",
          "query": {
            "or": [
              {"like": [{"attr": "name"}, {"param": "query"}]},
              {"like": [{"attr": "email"}, {"param": "query"}]}
            ]
          },
          "params": [{"name": "query", "type": "string"}]
        },
        {
          "name": "withAgentsId",
          "query": {"eq": [{"path": ["agent", "id"]}, {"param": "agentsId"}]},
          "params": [{"name": "agentsId", "type": "string"}]
        },
        {
          "name": "findByPropertiesId",
          "query": {
            "eq": [{"path": ["properties", "id"]}, {"param": "propertiesId"}]
          },
          "params": [{"name": "propertiesId", "type": "string"}]
        },
        {
          "name": "withVolleyballId",
          "query": {
            "eq": [{"attr": "volleyballId"}, {"param": "volleyballId"}]
          },
          "params": [{"name": "volleyballId", "type": "string"}]
        }
      ],
      "tableName": "enquiries",
      "attributes": [
        {
          "data": {"default": {"now": true}},
          "name": "createdAt",
          "type": "date"
        },
        {
          "data": {"default": {"now": true}},
          "name": "updatedAt",
          "type": "date"
        },
        {"name": "deletedAt", "type": "date"},
        {"data": {"required": true}, "name": "name", "type": "string"},
        {
          "data": {"required": true, "caseInsensitive": true},
          "name": "email",
          "type": "string"
        },
        {"data": {"required": true}, "name": "message", "type": "string"},
        {"name": "enquiryType", "type": "string"},
        {"name": "agentsId", "type": "string"},
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "response",
          "type": "string"
        },
        {
          "data": {
            "many": true,
            "model": "messages",
            "ownKey": "enquiries_id",
            "tableName": "enquiries_messages__messages_assoc",
            "foreignKey": "messages_id"
          },
          "name": "messages",
          "type": "association"
        },
        {"data": {}, "name": "receiveUpdates", "type": "boolean"},
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "phone",
          "type": "string"
        },
        {"data": {"default": false}, "name": "archived", "type": "boolean"},
        {
          "data": {
            "many": false,
            "model": "agents",
            "ownKey": "enquiries_id",
            "tableName": "enquiries_agents__agent_assoc",
            "foreignKey": "agents_id"
          },
          "name": "agent",
          "type": "association"
        },
        {
          "data": {
            "many": true,
            "model": "properties",
            "ownKey": "enquiries_id",
            "tableName": "enquiries_properties__properties_assoc",
            "foreignKey": "properties_id"
          },
          "name": "properties",
          "type": "association"
        },
        {
          "data": {
            "many": false,
            "model": "users",
            "ownKey": "enquiries_id",
            "inverseOf": "enquiries",
            "tableName": "users_enquiries__enquiries_assoc",
            "foreignKey": "users_id"
          },
          "name": "user",
          "type": "association"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "company",
          "type": "string"
        },
        {"data": {}, "name": "enquiryViewed", "type": "boolean"},
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "volleyballId",
          "type": "string"
        },
        {"data": {}, "name": "has_uk_guarantor", "type": "boolean"},
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "preferred_contact_method",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "notes",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "university_name",
          "type": "string"
        },
        {
          "data": {
            "many": true,
            "model": "rooms",
            "ownKey": "enquiries_id",
            "tableName": "enquiries_rooms__rooms_assoc",
            "foreignKey": "rooms_id"
          },
          "name": "rooms",
          "type": "association"
        },
        {
          "data": {
            "many": true,
            "model": "bookings",
            "ownKey": "enquiries_id",
            "inverseOf": "enquiry",
            "tableName": "bookings_enquiries__enquiry_assoc",
            "foreignKey": "bookings_id"
          },
          "name": "bookings",
          "type": "association"
        },
        {
          "data": {
            "many": true,
            "model": "emails",
            "ownKey": "enquiries_id",
            "inverseOf": "enquiry",
            "tableName": "emails_enquiries__enquiry_assoc",
            "foreignKey": "emails_id"
          },
          "name": "emails",
          "type": "association"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "anonymousEmail",
          "type": "string"
        }
      ]
    },
    {
      "name": "universities",
      "scopes": [],
      "tableName": "universities",
      "attributes": [
        {"name": "createdAt", "type": "date"},
        {"name": "updatedAt", "type": "date"},
        {"name": "deletedAt", "type": "date"},
        {"name": "name", "type": "string"}
      ]
    },
    {
      "name": "houses",
      "scopes": [],
      "tableName": "houses",
      "attributes": [
        {
          "data": {"default": {"now": true}},
          "name": "createdAt",
          "type": "date"
        },
        {
          "data": {"default": {"now": true}},
          "name": "updatedAt",
          "type": "date"
        },
        {"name": "deletedAt", "type": "date"},
        {"name": "name", "type": "string"},
        {
          "data": {
            "many": false,
            "model": "addresses",
            "ownKey": "id",
            "tableName": "houses",
            "foreignKey": "addressId"
          },
          "name": "address",
          "type": "association"
        }
      ]
    },
    {
      "name": "addresses",
      "scopes": [],
      "tableName": "addresses",
      "attributes": [
        {
          "data": {"default": {"now": true}},
          "name": "createdAt",
          "type": "date"
        },
        {
          "data": {"default": {"now": true}},
          "name": "updatedAt",
          "type": "date"
        },
        {"name": "deletedAt", "type": "date"},
        {"name": "line1", "type": "string"},
        {"name": "line2", "type": "string"},
        {"name": "line3", "type": "string"},
        {"name": "city", "type": "string"},
        {"name": "county", "type": "string"},
        {"name": "postcode", "type": "string"},
        {"name": "country", "type": "string"},
        {"name": "addressableId", "type": "string"},
        {"name": "firstName", "type": "string"},
        {"name": "lastName", "type": "string"},
        {"name": "phone", "type": "string"}
      ]
    },
    {
      "name": "contracts",
      "scopes": [
        {
          "name": "endsAfter",
          "query": {"gte": [{"attr": "endDate"}, {"param": "endDate"}]},
          "params": [{"name": "endDate", "type": "string"}]
        }
      ],
      "tableName": "contracts",
      "attributes": [
        {
          "data": {"default": {"now": true}},
          "name": "createdAt",
          "type": "date"
        },
        {
          "data": {"default": {"now": true}},
          "name": "updatedAt",
          "type": "date"
        },
        {"name": "deletedAt", "type": "date"},
        {"name": "startDate", "type": "date"},
        {"name": "endDate", "type": "date"},
        {"name": "dayOfMonth", "type": "number"},
        {"name": "lettingAgency", "type": "string"},
        {"name": "gasMeterSerialNumber", "type": "string"},
        {"name": "gasMeterReading", "type": "number"},
        {"name": "electricMeterSerialNumber", "type": "string"},
        {"name": "electricMeterReading", "type": "number"},
        {"name": "moveInDate", "type": "date"},
        {
          "data": {
            "many": false,
            "model": "houses",
            "ownKey": "id",
            "tableName": "contracts",
            "foreignKey": "houseId"
          },
          "name": "house",
          "type": "association"
        },
        {
          "data": {
            "many": true,
            "model": "tenancies",
            "ownKey": "contractId",
            "tableName": "tenancies",
            "foreignKey": "id"
          },
          "name": "tenancies",
          "type": "association"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "hubspotCompanyId",
          "type": "string"
        },
        {"data": {}, "name": "tenantCount", "type": "number"},
        {"data": {}, "name": "tv", "type": "boolean"},
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "packageLevel",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "internetServiceId",
          "type": "string"
        },
        {"data": {}, "name": "power", "type": "boolean"},
        {"data": {}, "name": "water", "type": "boolean"},
        {"data": {}, "name": "utilities", "type": "boolean"},
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "volleyballId",
          "type": "string"
        },
        {
          "data": {
            "many": true,
            "model": "meter_readings",
            "ownKey": "contracts_id",
            "inverseOf": "contract",
            "tableName": "meter_readings_contracts__contract_assoc",
            "foreignKey": "meter_readings_id"
          },
          "name": "meterReadings",
          "type": "association"
        },
        {"data": {}, "name": "totalPennies", "type": "number"},
        {"data": {}, "name": "utilitiesPennies", "type": "number"},
        {"data": {}, "name": "tvPennies", "type": "number"},
        {"data": {}, "name": "internetPennies", "type": "number"},
        {"data": {}, "name": "perMonthPennies", "type": "number"},
        {"data": {}, "name": "oneTimePennies", "type": "number"},
        {"data": {}, "name": "voucherPennies", "type": "number"},
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "voucherId",
          "type": "string"
        },
        {"data": {"default": false}, "name": "inactive", "type": "boolean"},
        {
          "data": {"default": false},
          "name": "receivedWelcomeMessage",
          "type": "boolean"
        },
        {"data": {}, "name": "undiscountedOneTimePennies", "type": "number"},
        {"data": {}, "name": "undiscountedPerMonthPennies", "type": "number"}
      ],
      "permissions": {
        "admin": {
          "read": {"isNull": {"attr": "deletedAt"}},
          "create": {"isNull": {"attr": "deletedAt"}},
          "update": {"isNull": {"attr": "deletedAt"}},
          "destroy": {"isNull": {"attr": "deletedAt"}}
        },
        "agent": true,
        "anonymous": false,
        "authenticated": {
          "read": {
            "and": [
              {
                "anyIn": {
                  "query": {"eq": [{"attr": "user"}, {"session": true}]},
                  "attribute": "tenancies"
                }
              },
              {"isNull": {"attr": "deletedAt"}}
            ]
          },
          "create": {
            "anyIn": {
              "query": {"eq": [{"attr": "user"}, {"session": true}]},
              "attribute": "tenancies"
            }
          },
          "update": {
            "anyIn": {
              "query": {"eq": [{"attr": "user"}, {"session": true}]},
              "attribute": "tenancies"
            }
          },
          "destroy": {
            "anyIn": {
              "query": {"eq": [{"attr": "user"}, {"session": true}]},
              "attribute": "tenancies"
            }
          }
        }
      }
    },
    {
      "name": "invites",
      "scopes": [
        {
          "name": "withToken",
          "query": {"eq": [{"attr": "token"}, {"param": "token"}]},
          "params": [{"name": "token", "type": "string"}]
        }
      ],
      "tableName": "invites",
      "attributes": [
        {
          "data": {"default": {"now": true}},
          "name": "createdAt",
          "type": "date"
        },
        {
          "data": {"default": {"now": true}},
          "name": "updatedAt",
          "type": "date"
        },
        {"name": "deletedAt", "type": "date"},
        {"name": "token", "type": "string"},
        {"data": {"caseInsensitive": true}, "name": "email", "type": "string"},
        {
          "data": {
            "many": false,
            "model": "tenancies",
            "ownKey": "inviteId",
            "tableName": "tenancies",
            "foreignKey": "id"
          },
          "name": "tenancy",
          "type": "association"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "status",
          "type": "string"
        }
      ]
    },
    {
      "name": "tenancies",
      "scopes": [
        {
          "name": "withStatus",
          "query": {"eq": [{"attr": "status"}, {"param": "status"}]},
          "params": [{"name": "status", "type": "string"}]
        }
      ],
      "tableName": "tenancies",
      "attributes": [
        {
          "data": {"default": {"now": true}},
          "name": "createdAt",
          "type": "date"
        },
        {
          "data": {"default": {"now": true}},
          "name": "updatedAt",
          "type": "date"
        },
        {"name": "deletedAt", "type": "date"},
        {"name": "primaryTenant", "type": "boolean"},
        {"name": "contractId", "type": "uuid"},
        {"data": {"caseInsensitive": true}, "name": "email", "type": "string"},
        {"name": "inviteId", "type": "uuid"},
        {"name": "status", "type": "string"},
        {"name": "stage", "type": "string"},
        {"name": "guarantorName", "type": "string"},
        {
          "data": {"caseInsensitive": true},
          "name": "guarantorEmail",
          "type": "string"
        },
        {"name": "guarantorPhone", "type": "string"},
        {"name": "goCardlessPlanId", "type": "string"},
        {"name": "name", "type": "string"},
        {
          "data": {
            "many": false,
            "model": "users",
            "ownKey": "id",
            "tableName": "tenancies",
            "foreignKey": "userId"
          },
          "name": "user",
          "type": "association"
        },
        {
          "data": {
            "many": false,
            "model": "invites",
            "ownKey": "id",
            "tableName": "tenancies",
            "foreignKey": "inviteId"
          },
          "name": "invite",
          "type": "association"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "voucherId",
          "type": "string"
        },
        {
          "data": {
            "many": false,
            "model": "vouchers",
            "ownKey": "tenancies_id",
            "tableName": "tenancies_vouchers__voucher_assoc",
            "foreignKey": "vouchers_id"
          },
          "name": "voucher",
          "type": "association"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "hubspotContactVid",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "stripeCustomerId",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "stripeSubscriptionId",
          "type": "string"
        },
        {"data": {}, "name": "oneTimePennies", "type": "number"},
        {"data": {}, "name": "perMonthPennies", "type": "number"},
        {"data": {}, "name": "totalPennies", "type": "number"},
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "phone",
          "type": "string"
        },
        {"data": {}, "name": "priceQuotedAt", "type": "date"},
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "occupation",
          "type": "string"
        },
        {
          "data": {
            "many": false,
            "model": "contracts",
            "ownKey": "id",
            "inverseOf": "tenancies",
            "tableName": "tenancies",
            "foreignKey": "contractId"
          },
          "name": "contract",
          "type": "association"
        },
        {
          "data": {
            "default": "quarterly",
            "preserveCase": true,
            "caseInsensitive": false
          },
          "name": "billingPeriod",
          "type": "string"
        },
        {"data": {}, "name": "quoteIncludesVoucher", "type": "boolean"},
        {"data": {}, "name": "internetPennies", "type": "number"},
        {"data": {}, "name": "tvPennies", "type": "number"},
        {"data": {}, "name": "utilitiesPennies", "type": "number"},
        {"data": {}, "name": "voucherPennies", "type": "number"},
        {"data": {}, "name": "billingDate", "type": "date"},
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "stripeUtilitiesCustomerId",
          "type": "string"
        },
        {"data": {}, "name": "completedAt", "type": "date"},
        {
          "data": {"default": false},
          "name": "alreadyPaidBills",
          "type": "boolean"
        },
        {"data": {}, "name": "inviteLastSentAt", "type": "date"},
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "referralCode",
          "type": "string"
        },
        {"data": {}, "name": "undiscountedPerMonthPennies", "type": "number"},
        {"data": {}, "name": "undiscountedOneTimePennies", "type": "number"},
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "referralSource",
          "type": "string"
        },
        {"data": {"default": false}, "name": "referralPaid", "type": "boolean"},
        {
          "data": {
            "many": false,
            "model": "referrals",
            "ownKey": "tenancies_id",
            "inverseOf": "tenancy",
            "tableName": "referrals_tenancies__tenancy_assoc",
            "foreignKey": "referrals_id"
          },
          "name": "referral",
          "type": "association"
        },
        {
          "data": {
            "many": true,
            "model": "installments",
            "ownKey": "tenancies_id",
            "inverseOf": "tenancy",
            "tableName": "installments_tenancies__tenancy_assoc",
            "foreignKey": "installments_id"
          },
          "name": "installments",
          "type": "association"
        },
        {
          "data": {"default": false},
          "name": "quoteSetManually",
          "type": "boolean"
        },
        {
          "data": {"default": false},
          "name": "firstInstallmentMonthly",
          "type": "boolean"
        },
        {"data": {}, "name": "meterReadingsLastSentAt", "type": "date"}
      ],
      "permissions": {
        "admin": {
          "read": {"isNull": {"attr": "deletedAt"}},
          "create": true,
          "update": {"isNull": {"attr": "deletedAt"}},
          "destroy": {"isNull": {"attr": "deletedAt"}}
        },
        "agents": true,
        "anonymous": false,
        "authenticated": {
          "read": {
            "and": [
              {"eq": [{"attr": "user"}, {"session": true}]},
              {"isNull": {"attr": "deletedAt"}}
            ]
          },
          "create": {"eq": [{"attr": "user"}, {"session": true}]},
          "update": {"eq": [{"attr": "user"}, {"session": true}]},
          "destroy": {"eq": [{"attr": "user"}, {"session": true}]}
        }
      }
    },
    {
      "name": "blogPosts",
      "scopes": [
        {
          "name": "withSlug",
          "query": {"eq": [{"attr": "slug"}, {"param": "slug"}]},
          "params": [{"name": "slug", "type": "string"}]
        },
        {
          "name": "search",
          "query": {"like": [{"attr": "title"}, {"param": "query"}]},
          "params": [{"name": "query", "type": "string"}]
        }
      ],
      "tableName": "blogPosts",
      "attributes": [
        {
          "data": {"default": {"now": true}},
          "name": "createdAt",
          "type": "date"
        },
        {
          "data": {"default": {"now": true}},
          "name": "updatedAt",
          "type": "date"
        },
        {"name": "deletedAt", "type": "date"},
        {"name": "slug", "type": "string"},
        {"name": "title", "type": "string"},
        {"name": "body", "type": "string"},
        {"name": "excerpt", "type": "string"},
        {"name": "imageThumbnail", "type": "string"},
        {"name": "imageFull", "type": "string"},
        {
          "data": {
            "many": true,
            "model": "blogCategories",
            "ownKey": "blogPostsId",
            "tableName": "blogPostsBlogCategories-association",
            "foreignKey": "blogCategoriesId"
          },
          "name": "categories",
          "type": "association"
        }
      ]
    },
    {
      "name": "blogCategories",
      "scopes": [
        {
          "name": "withSlug",
          "query": {"eq": [{"attr": "slug"}, {"param": "slug"}]},
          "params": [{"name": "slug", "type": "string"}]
        }
      ],
      "tableName": "blogCategories",
      "attributes": [
        {
          "data": {"default": {"now": true}},
          "name": "createdAt",
          "type": "date"
        },
        {
          "data": {"default": {"now": true}},
          "name": "updatedAt",
          "type": "date"
        },
        {"name": "deletedAt", "type": "date"},
        {"name": "name", "type": "string"},
        {"name": "slug", "type": "string"},
        {
          "data": {
            "many": true,
            "model": "blogPosts",
            "ownKey": "blogCategoriesId",
            "tableName": "blogPostsBlogCategories-association",
            "foreignKey": "blogPostsId"
          },
          "name": "posts",
          "type": "association"
        }
      ]
    },
    {
      "name": "users",
      "scopes": [
        {
          "name": "search",
          "query": {
            "or": [
              {"like": [{"attr": "firstName"}, {"param": "query"}]},
              {"like": [{"attr": "lastName"}, {"param": "query"}]},
              {"like": [{"attr": "email"}, {"param": "query"}]}
            ]
          },
          "params": [{"name": "query", "type": "string"}]
        },
        {
          "name": "findByEmail",
          "query": {"eq": [{"attr": "email"}, {"param": "email"}]},
          "params": [{"name": "email", "type": "string"}]
        },
        {
          "name": "findByPasswordResetToken",
          "query": {
            "eq": [
              {"attr": "passwordResetToken"},
              {"param": "passwordResetToken"}
            ]
          },
          "params": [{"name": "passwordResetToken", "type": "string"}]
        },
        {
          "name": "findByReferralCode",
          "query": {
            "eq": [{"attr": "referralCode"}, {"param": "referralCode"}]
          },
          "params": [{"name": "referralCode", "type": "string"}]
        },
        {
          "name": "findByReferralToken",
          "query": {
            "eq": [{"attr": "referralToken"}, {"param": "referralToken"}]
          },
          "params": [{"name": "referralToken", "type": "string"}]
        },
        {
          "name": "findByPromoterId",
          "query": {"eq": [{"attr": "promoterId"}, {"param": "promoterId"}]},
          "params": [{"name": "promoterId", "type": "string"}]
        }
      ],
      "tableName": "users",
      "attributes": [
        {
          "data": {"default": {"now": true}},
          "name": "createdAt",
          "type": "date"
        },
        {
          "data": {"default": {"now": true}},
          "name": "updatedAt",
          "type": "date"
        },
        {"name": "deletedAt", "type": "date"},
        {"data": {"required": true}, "name": "firstName", "type": "string"},
        {"data": {"required": true}, "name": "lastName", "type": "string"},
        {
          "data": {"required": true, "caseInsensitive": true},
          "name": "email",
          "type": "string"
        },
        {"name": "sessions", "type": "string"},
        {"name": "imageUid", "type": "string"},
        {"name": "receiveUpdates", "type": "boolean"},
        {"name": "termsAndConditions", "type": "boolean"},
        {"name": "phone", "type": "string"},
        {"name": "universityId", "type": "uuid"},
        {"name": "graduationYear", "type": "string"},
        {"name": "legacySlug", "type": "string"},
        {"name": "legacyMediaRef", "type": "string"},
        {"name": "type", "type": "string"},
        {"name": "goCardlessCustomerId", "type": "string"},
        {"name": "dateOfBirth", "type": "date"},
        {"name": "billingAddressId", "type": "uuid"},
        {"name": "admin", "type": "boolean"},
        {"name": "agent", "type": "boolean"},
        {"name": "passwordResetToken", "type": "string"},
        {"name": "googleId", "type": "string"},
        {"name": "facebookId", "type": "string"},
        {
          "data": {
            "many": true,
            "model": "contracts",
            "ownKey": "userId",
            "tableName": "tenancies",
            "foreignKey": "contractId"
          },
          "name": "contracts",
          "type": "association"
        },
        {
          "data": {
            "many": false,
            "model": "universities",
            "ownKey": "id",
            "tableName": "users",
            "foreignKey": "universityId"
          },
          "name": "university",
          "type": "association"
        },
        {
          "data": {
            "many": false,
            "model": "agents",
            "ownKey": "usersId",
            "tableName": "agents-users--association",
            "foreignKey": "agentsId"
          },
          "name": "agentRecord",
          "type": "association"
        },
        {"data": {"many": false}, "name": "image", "type": "image"},
        {"data": {}, "name": "password", "type": "password"},
        {
          "data": {"preserveCase": true, "caseInsensitive": true},
          "name": "referralToken",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": true},
          "name": "referralCode",
          "type": "string"
        },
        {"data": {}, "name": "promoter", "type": "boolean"},
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "promoterId",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": true},
          "name": "promoterEmail",
          "type": "string"
        },
        {
          "data": {
            "many": true,
            "model": "enquiries",
            "ownKey": "users_id",
            "tableName": "users_enquiries__enquiries_assoc",
            "foreignKey": "enquiries_id"
          },
          "name": "enquiries",
          "type": "association"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "swapToken",
          "type": "string"
        },
        {
          "data": {
            "many": true,
            "model": "invitesubpromoters",
            "ownKey": "users_id",
            "tableName": "users_invitesubpromoters__invitesubpromoters_assoc",
            "foreignKey": "invitesubpromoters_id"
          },
          "name": "invitesubpromoters",
          "type": "association"
        },
        {
          "data": {
            "many": true,
            "model": "messages",
            "ownKey": "users_id",
            "tableName": "users_messages__messages_assoc",
            "foreignKey": "messages_id"
          },
          "name": "messages",
          "type": "association"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "stripeAccountId",
          "type": "string"
        },
        {
          "data": {
            "many": true,
            "model": "facebook_messages",
            "ownKey": "users_id",
            "tableName": "users_facebook_messages__facebook_messages_assoc",
            "foreignKey": "facebook_messages_id"
          },
          "name": "facebook_messages",
          "type": "association"
        },
        {
          "data": {
            "many": true,
            "model": "transactions",
            "ownKey": "users_id",
            "tableName": "users_transactions__transactions_assoc",
            "foreignKey": "transactions_id"
          },
          "name": "transactions",
          "type": "association"
        },
        {
          "data": {
            "many": true,
            "model": "payment_requests",
            "ownKey": "users_id",
            "inverseOf": "user",
            "tableName": "payment_requests_users__user_assoc",
            "foreignKey": "payment_requests_id"
          },
          "name": "paymentRequests",
          "type": "association"
        },
        {"data": {"default": true}, "name": "receiveEmail", "type": "boolean"},
        {"data": {"default": true}, "name": "receivePhone", "type": "boolean"},
        {"data": {}, "name": "referralClicks", "type": "number"},
        {
          "data": {"default": true},
          "name": "receiveSocialMedia",
          "type": "boolean"
        },
        {"data": {}, "name": "requiresPassword", "type": "boolean"},
        {
          "data": {
            "many": true,
            "model": "tenancies",
            "ownKey": "userId",
            "inverseOf": "user",
            "tableName": "tenancies",
            "foreignKey": "id"
          },
          "name": "tenancies",
          "type": "association"
        },
        {
          "data": {
            "many": true,
            "model": "referral_tokens",
            "ownKey": "users_id",
            "inverseOf": "user",
            "tableName": "referral_tokens_users__user_assoc",
            "foreignKey": "referral_tokens_id"
          },
          "name": "referral_tokens",
          "type": "association"
        },
        {
          "data": {
            "many": true,
            "model": "referral_summaries",
            "ownKey": "users_id",
            "tableName": "users_referral_summaries__referral_summaries_assoc",
            "foreignKey": "referral_summaries_id"
          },
          "name": "referral_summaries",
          "type": "association"
        },
        {
          "data": {
            "many": true,
            "model": "favourite_lists",
            "ownKey": "users_id",
            "inverseOf": "users",
            "tableName": "favourite_lists_users__users_assoc",
            "foreignKey": "favourite_lists_id"
          },
          "name": "favourite_lists",
          "type": "association"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "volleyballId",
          "type": "string"
        },
        {
          "data": {
            "many": true,
            "model": "error_logs",
            "ownKey": "users_id",
            "tableName": "users_error_logs__errorLogs_assoc",
            "foreignKey": "error_logs_id"
          },
          "name": "errorLogs",
          "type": "association"
        },
        {
          "data": {
            "many": true,
            "model": "agent_reviews",
            "ownKey": "users_id",
            "inverseOf": "user",
            "tableName": "agent_reviews_users__user_assoc",
            "foreignKey": "agent_reviews_id"
          },
          "name": "agent_reviews",
          "type": "association"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "activeTenancyId",
          "type": "string"
        },
        {
          "data": {"default": false},
          "name": "receivedWelcomeMessage",
          "type": "boolean"
        },
        {
          "data": {
            "many": true,
            "model": "properties_no_results_requests",
            "ownKey": "users_id",
            "inverseOf": "user",
            "tableName": "properties_no_results_requests_users__user_assoc",
            "foreignKey": "properties_no_results_requests_id"
          },
          "name": "properties_no_results_requests",
          "type": "association"
        },
        {
          "data": {
            "many": true,
            "model": "referrals",
            "ownKey": "users_id",
            "inverseOf": "referringUser",
            "tableName": "referrals_users__referringUser_assoc",
            "foreignKey": "referrals_id"
          },
          "name": "referrals",
          "type": "association"
        },
        {
          "data": {
            "many": true,
            "model": "bookings",
            "ownKey": "users_id",
            "inverseOf": "users",
            "tableName": "bookings_users__users_assoc",
            "foreignKey": "bookings_id"
          },
          "name": "bookings",
          "type": "association"
        },
        {
          "data": {
            "many": true,
            "model": "propertySearches",
            "ownKey": "users_id",
            "inverseOf": "user",
            "tableName": "propertySearches_users__user_assoc",
            "foreignKey": "propertySearches_id"
          },
          "name": "propertySearches",
          "type": "association"
        },
        {
          "data": {"default": false},
          "name": "referralsFiveClicksEmailSent",
          "type": "boolean"
        },
        {
          "data": {"default": false},
          "name": "receivedReferralsIntroEmail",
          "type": "boolean"
        }
      ],
      "permissions": {
        "admin": true,
        "anonymous": {
          "read": false,
          "create": true,
          "update": false,
          "destroy": false
        },
        "authenticated": {
          "read": {"eq": [{"session": true}, {"id": true}]},
          "create": false,
          "update": false,
          "destroy": false
        }
      }
    },
    {
      "name": "favourites",
      "scopes": [],
      "tableName": "favourites",
      "attributes": [
        {
          "data": {"default": {"now": true}},
          "name": "createdAt",
          "type": "date"
        },
        {
          "data": {"default": {"now": true}},
          "name": "updatedAt",
          "type": "date"
        },
        {"name": "deletedAt", "type": "date"},
        {"name": "userId", "type": "uuid"},
        {"name": "propertyId", "type": "uuid"}
      ]
    },
    {
      "name": "propertyAttachments",
      "scopes": [],
      "tableName": "propertyAttachments",
      "attributes": [
        {
          "data": {"default": {"now": true}},
          "name": "createdAt",
          "type": "date"
        },
        {
          "data": {"default": {"now": true}},
          "name": "updatedAt",
          "type": "date"
        },
        {"name": "deletedAt", "type": "date"},
        {"name": "propertyId", "type": "uuid"},
        {"name": "file_uid", "type": "string"},
        {"name": "file_name", "type": "string"},
        {"name": "body", "type": "string"},
        {"name": "image", "type": "boolean"},
        {"name": "image_thumbnail", "type": "string"},
        {"name": "image_small", "type": "string"},
        {"name": "image_medium", "type": "string"},
        {"name": "image_large", "type": "string"},
        {
          "data": {
            "many": false,
            "model": "mediaTaggings",
            "ownKey": "propertyAttachmentId",
            "tableName": "mediaTaggings",
            "foreignKey": "id"
          },
          "name": "mediaTaggings",
          "type": "association"
        },
        {"data": {}, "name": "weight", "type": "number"}
      ]
    },
    {
      "name": "countries",
      "scopes": [],
      "tableName": "countries",
      "attributes": [
        {
          "data": {"default": {"now": true}},
          "name": "createdAt",
          "type": "date"
        },
        {
          "data": {"default": {"now": true}},
          "name": "updatedAt",
          "type": "date"
        },
        {"name": "deletedAt", "type": "date"},
        {"name": "name", "type": "string"},
        {"name": "code", "type": "string"},
        {"name": "phone", "type": "string"}
      ]
    },
    {
      "name": "vouchers",
      "scopes": [
        {
          "name": "findByCode",
          "query": {"eq": [{"attr": "code"}, {"param": "code"}]},
          "params": [{"name": "code", "type": "string"}]
        },
        {
          "name": "findByName",
          "query": {"eq": [{"attr": "name"}, {"param": "name"}]},
          "params": [{"name": "name", "type": "string"}]
        }
      ],
      "tableName": "vouchers",
      "attributes": [
        {"data": {}, "name": "amountPennies", "type": "number"},
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "name",
          "type": "string"
        },
        {"data": {}, "name": "expiryDate", "type": "date"},
        {"data": {}, "name": "createAt", "type": "date"},
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "code",
          "type": "string"
        },
        {"data": {}, "name": "useLimit", "type": "number"},
        {
          "data": {
            "many": true,
            "model": "tenancies",
            "ownKey": "vouchers_id",
            "tableName": "vouchers_tenancies__tenancies_assoc",
            "foreignKey": "tenancies_id"
          },
          "name": "tenancies",
          "type": "association"
        },
        {"data": {}, "name": "redemptions", "type": "number"},
        {"data": {}, "name": "updatedAt", "type": "date"},
        {"data": {}, "name": "locked", "type": "boolean"},
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "notes",
          "type": "string"
        },
        {"data": {}, "name": "affectOneTimePayment", "type": "boolean"},
        {"data": {"default": false}, "name": "referralOnly", "type": "boolean"}
      ]
    },
    {
      "name": "messages",
      "scopes": [
        {
          "name": "notViewed",
          "query": {"and": [{"eq": [{"attr": "viewed"}, {"value": false}]}]}
        }
      ],
      "tableName": "messages",
      "attributes": [
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "messageText",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": true},
          "name": "email",
          "type": "string"
        },
        {"data": {}, "name": "createdAt", "type": "date"},
        {"data": {"default": false}, "name": "viewed", "type": "boolean"},
        {
          "data": {
            "many": false,
            "model": "users",
            "ownKey": "messages_id",
            "inverseOf": "messages",
            "tableName": "users_messages__messages_assoc",
            "foreignKey": "users_id"
          },
          "name": "user",
          "type": "association"
        },
        {"data": {}, "name": "agentViewed", "type": "boolean"}
      ]
    },
    {
      "name": "tasks",
      "scopes": [
        {
          "name": "findByMachineName",
          "query": {"eq": [{"attr": "machineName"}, {"param": "machineName"}]},
          "params": [{"name": "machineName", "type": "string"}]
        }
      ],
      "tableName": "tasks",
      "attributes": [
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "machineName",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "interval",
          "type": "string"
        },
        {"data": {}, "name": "shouldRunAt", "type": "date"}
      ]
    },
    {
      "name": "referrals",
      "scopes": [
        {
          "name": "findByEmail",
          "query": {"eq": [{"attr": "email"}, {"param": "email"}]},
          "params": [{"name": "email", "type": "string"}]
        }
      ],
      "tableName": "referrals",
      "attributes": [
        {
          "data": {
            "default": "",
            "required": true,
            "preserveCase": true,
            "caseInsensitive": true
          },
          "name": "email",
          "type": "string"
        },
        {"data": {}, "name": "sentAt", "type": "date"},
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "status",
          "type": "string"
        },
        {"data": {}, "name": "value", "type": "number"},
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "type",
          "type": "string"
        },
        {"data": {}, "name": "promoterValue", "type": "number"},
        {"data": {}, "name": "consumed", "type": "boolean"},
        {"data": {}, "name": "promoterConsumed", "type": "boolean"},
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "source",
          "type": "string"
        },
        {
          "data": {
            "many": false,
            "model": "users",
            "ownKey": "referrals_id",
            "tableName": "referrals_users__referringUser_assoc",
            "foreignKey": "users_id"
          },
          "name": "referringUser",
          "type": "association"
        },
        {
          "data": {
            "many": false,
            "model": "tenancies",
            "ownKey": "referrals_id",
            "tableName": "referrals_tenancies__tenancy_assoc",
            "foreignKey": "tenancies_id"
          },
          "name": "tenancy",
          "type": "association"
        }
      ]
    },
    {
      "name": "invitesubpromoters",
      "scopes": [
        {
          "name": "findByEmail",
          "query": {"eq": [{"attr": "email"}, {"param": "email"}]},
          "params": [{"name": "email", "type": "string"}]
        },
        {
          "name": "findPromotersId",
          "query": {"eq": [{"attr": "promotersId"}, {"param": "promotersId"}]},
          "params": [{"name": "promotersId", "type": "string"}]
        }
      ],
      "tableName": "invitesubpromoters",
      "attributes": [
        {
          "data": {"preserveCase": true, "caseInsensitive": true},
          "name": "email",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "promotersId",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "status",
          "type": "string"
        },
        {
          "data": {
            "many": false,
            "model": "users",
            "ownKey": "invitesubpromoters_id",
            "inverseOf": "invitesubpromoters",
            "tableName": "users_invitesubpromoters__invitesubpromoters_assoc",
            "foreignKey": "users_id"
          },
          "name": "user",
          "type": "association"
        }
      ]
    },
    {
      "name": "rooms",
      "scopes": [],
      "tableName": "rooms",
      "attributes": [
        {"data": {}, "name": "startDate", "type": "date"},
        {"data": {}, "name": "endDate", "type": "date"},
        {
          "data": {
            "default": "",
            "preserveCase": true,
            "caseInsensitive": false
          },
          "name": "contractLength",
          "type": "string"
        },
        {"data": {"default": false}, "name": "available", "type": "boolean"},
        {"data": {"many": true}, "name": "images", "type": "image"},
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "type",
          "type": "string"
        },
        {"data": {}, "name": "price_pennies", "type": "number"},
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "pricePer",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "name",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "description",
          "type": "string"
        },
        {"data": {}, "name": "beds", "type": "number"},
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "unavailableReason",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "universityLivingId",
          "type": "string"
        },
        {
          "data": {
            "unique": true,
            "preserveCase": true,
            "caseInsensitive": false
          },
          "name": "sturentsSlug",
          "type": "string"
        },
        {
          "data": {
            "many": true,
            "model": "enquiries",
            "ownKey": "rooms_id",
            "inverseOf": "rooms",
            "tableName": "enquiries_rooms__rooms_assoc",
            "foreignKey": "enquiries_id"
          },
          "name": "enquiries",
          "type": "association"
        },
        {
          "data": {
            "many": true,
            "model": "bookings",
            "ownKey": "rooms_id",
            "inverseOf": "room",
            "tableName": "bookings_rooms__room_assoc",
            "foreignKey": "bookings_id"
          },
          "name": "bookings",
          "type": "association"
        }
      ]
    },
    {
      "name": "facebook_messages",
      "scopes": [],
      "tableName": "facebook_messages",
      "attributes": [
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "message",
          "type": "string"
        },
        {"data": {}, "name": "updatedAt", "type": "date"},
        {"data": {}, "name": "createdAt", "type": "date"},
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "messageId",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": true},
          "name": "email",
          "type": "string"
        }
      ]
    },
    {
      "name": "transactions",
      "scopes": [],
      "tableName": "transactions",
      "attributes": [
        {"data": {}, "name": "amountPennies", "type": "number"},
        {
          "data": {
            "many": false,
            "model": "users",
            "ownKey": "transactions_id",
            "inverseOf": "transactions",
            "tableName": "users_transactions__transactions_assoc",
            "foreignKey": "users_id"
          },
          "name": "user",
          "type": "association"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "body",
          "type": "string"
        },
        {"data": {}, "name": "createdAt", "type": "date"},
        {"data": {}, "name": "updatedAt", "type": "date"},
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "status",
          "type": "string"
        },
        {
          "data": {
            "many": true,
            "model": "payment_requests",
            "ownKey": "transactions_id",
            "inverseOf": "transactions",
            "tableName": "payment_requests_transactions__transactions_assoc",
            "foreignKey": "payment_requests_id"
          },
          "name": "paymentRequests",
          "type": "association"
        }
      ]
    },
    {
      "name": "payment_requests",
      "scopes": [],
      "tableName": "payment_requests",
      "attributes": [
        {"data": {}, "name": "updatedAt", "type": "date"},
        {"data": {}, "name": "createdAt", "type": "date"},
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "body",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "status",
          "type": "string"
        },
        {
          "data": {
            "many": true,
            "model": "transactions",
            "ownKey": "payment_requests_id",
            "tableName": "payment_requests_transactions__transactions_assoc",
            "foreignKey": "transactions_id"
          },
          "name": "transactions",
          "type": "association"
        },
        {
          "data": {
            "many": false,
            "model": "users",
            "ownKey": "payment_requests_id",
            "tableName": "payment_requests_users__user_assoc",
            "foreignKey": "users_id"
          },
          "name": "user",
          "type": "association"
        }
      ]
    },
    {
      "name": "premium_listings",
      "scopes": [],
      "tableName": "premium_listings",
      "attributes": [
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "type",
          "type": "string"
        },
        {"data": {}, "name": "startDate", "type": "date"},
        {"data": {}, "name": "endDate", "type": "date"},
        {
          "data": {
            "many": false,
            "model": "properties",
            "ownKey": "premium_listings_id",
            "inverseOf": "premium_listings",
            "tableName": "properties_premium_listings__premium_listings_assoc",
            "foreignKey": "properties_id"
          },
          "name": "property",
          "type": "association"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "status",
          "type": "string"
        },
        {"data": {}, "name": "reRequestedDate", "type": "date"},
        {
          "data": {"default": {"now": true}},
          "name": "createdAt",
          "type": "date"
        },
        {
          "data": {"default": {"now": true}},
          "name": "updatedAt",
          "type": "date"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "notes",
          "type": "string"
        },
        {"data": {"default": false}, "name": "hidden", "type": "boolean"}
      ],
      "permissions": {
        "anonymous": {
          "read": {"eq": [{"attr": "hidden"}, {"value": false}]},
          "create": true,
          "update": true,
          "destroy": true
        },
        "authenticated": {
          "read": {"eq": [{"attr": "hidden"}, {"value": false}]},
          "create": true,
          "update": true,
          "destroy": true
        }
      }
    },
    {
      "name": "statistics",
      "scopes": [],
      "tableName": "statistics",
      "attributes": [
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "jsonData",
          "type": "string"
        },
        {"data": {}, "name": "createdAt", "type": "date"}
      ]
    },
    {
      "name": "property_api_tokens",
      "scopes": [
        {
          "name": "findByToken",
          "query": {"eq": [{"attr": "token"}, {"param": "token"}]},
          "params": [{"name": "token", "type": "string"}]
        }
      ],
      "tableName": "property_api_tokens",
      "attributes": [
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "token",
          "type": "string"
        },
        {"data": {}, "name": "allAccess", "type": "boolean"},
        {"data": {}, "name": "amountUsed", "type": "number"},
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "label",
          "type": "string"
        },
        {"data": {}, "name": "nonResoomaAccess", "type": "boolean"}
      ]
    },
    {
      "name": "referral_tokens",
      "scopes": [
        {
          "name": "findByToken",
          "query": {"eq": [{"attr": "token"}, {"param": "token"}]},
          "params": [{"name": "token", "type": "string"}]
        }
      ],
      "tableName": "referral_tokens",
      "attributes": [
        {
          "data": {
            "unique": true,
            "preserveCase": true,
            "caseInsensitive": true
          },
          "name": "token",
          "type": "string"
        },
        {
          "data": {
            "many": false,
            "model": "users",
            "ownKey": "referral_tokens_id",
            "tableName": "referral_tokens_users__user_assoc",
            "foreignKey": "users_id"
          },
          "name": "user",
          "type": "association"
        }
      ]
    },
    {
      "name": "referral_summaries",
      "scopes": [],
      "tableName": "referral_summaries",
      "attributes": [
        {"data": {}, "name": "startsAt", "type": "date"},
        {"data": {}, "name": "clicks", "type": "number"},
        {"data": {}, "name": "amountPennies", "type": "number"},
        {"data": {}, "name": "redemptions", "type": "number"},
        {"data": {}, "name": "createdAt", "type": "date"},
        {"data": {}, "name": "updatedAt", "type": "date"},
        {"data": {}, "name": "clicksTotal", "type": "number"},
        {"data": {}, "name": "amountPenniesTotal", "type": "number"},
        {"data": {}, "name": "redemptionsTotal", "type": "number"},
        {"data": {}, "name": "clickConversions", "type": "number"},
        {"data": {}, "name": "manualReferrals", "type": "number"},
        {"data": {}, "name": "manualConversions", "type": "number"},
        {"data": {}, "name": "totalQuotes", "type": "number"},
        {"data": {}, "name": "paidQuotes", "type": "number"},
        {"data": {}, "name": "completeQuotes", "type": "number"}
      ]
    },
    {
      "name": "favourite_lists",
      "scopes": [],
      "tableName": "favourite_lists",
      "attributes": [
        {
          "data": {
            "many": true,
            "model": "users",
            "ownKey": "favourite_lists_id",
            "tableName": "favourite_lists_users__users_assoc",
            "foreignKey": "users_id"
          },
          "name": "users",
          "type": "association"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "name",
          "type": "string"
        },
        {
          "data": {
            "many": true,
            "model": "properties",
            "ownKey": "favourite_lists_id",
            "tableName": "favourite_lists_properties__properties_assoc",
            "foreignKey": "properties_id"
          },
          "name": "properties",
          "type": "association"
        }
      ]
    },
    {
      "name": "error_logs",
      "scopes": [],
      "tableName": "error_logs",
      "attributes": [
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "url",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "dataJSON",
          "type": "string"
        },
        {"data": {}, "name": "createdAt", "type": "date"},
        {"data": {}, "name": "updatedAt", "type": "date"},
        {
          "data": {
            "many": false,
            "model": "users",
            "ownKey": "error_logs_id",
            "inverseOf": "errorLogs",
            "tableName": "users_error_logs__errorLogs_assoc",
            "foreignKey": "users_id"
          },
          "name": "user",
          "type": "association"
        }
      ]
    },
    {
      "name": "internet_services",
      "scopes": [],
      "tableName": "internet_services",
      "attributes": [
        {"data": {}, "name": "createdAt", "type": "date"},
        {"data": {}, "name": "updatedAt", "type": "date"},
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "name",
          "type": "string"
        },
        {"data": {}, "name": "pricePennies", "type": "number"},
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "body",
          "type": "string"
        }
      ]
    },
    {
      "name": "meter_readings",
      "scopes": [],
      "tableName": "meter_readings",
      "attributes": [
        {
          "data": {
            "many": false,
            "model": "contracts",
            "ownKey": "meter_readings_id",
            "tableName": "meter_readings_contracts__contract_assoc",
            "foreignKey": "contracts_id"
          },
          "name": "contract",
          "type": "association"
        },
        {"data": {}, "name": "createdAt", "type": "date"},
        {"data": {}, "name": "updatedAt", "type": "date"},
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "electricReading",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "gasReading",
          "type": "string"
        },
        {"data": {"many": false}, "name": "gasImage", "type": "image"},
        {"data": {"many": false}, "name": "electricImage", "type": "image"}
      ]
    },
    {
      "name": "agent_reviews",
      "scopes": [
        {
          "name": "approved",
          "query": {"eq": [{"attr": "status"}, {"value": "approved"}]}
        },
        {
          "name": "awaiting_approval",
          "query": {"eq": [{"attr": "status"}, {"value": "awaiting_approval"}]}
        },
        {
          "name": "rejected",
          "query": {"eq": [{"attr": "status"}, {"value": "rejected"}]}
        },
        {
          "name": "search",
          "query": {
            "or": [
              {"like": [{"attr": "name"}, {"param": "query"}]},
              {"like": [{"attr": "email"}, {"param": "query"}]}
            ]
          },
          "params": [{"name": "query", "type": "string"}]
        }
      ],
      "tableName": "agent_reviews",
      "attributes": [
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "name",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": true},
          "name": "email",
          "type": "string"
        },
        {"data": {}, "name": "rating", "type": "number"},
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "body",
          "type": "string"
        },
        {
          "data": {
            "default": "awaiting_approval",
            "preserveCase": true,
            "caseInsensitive": false
          },
          "name": "status",
          "type": "string"
        },
        {
          "data": {
            "many": false,
            "model": "agents",
            "ownKey": "agent_reviews_id",
            "tableName": "agent_reviews_agents__agent_assoc",
            "foreignKey": "agents_id"
          },
          "name": "agent",
          "type": "association"
        },
        {
          "data": {
            "many": false,
            "model": "users",
            "ownKey": "agent_reviews_id",
            "tableName": "agent_reviews_users__user_assoc",
            "foreignKey": "users_id"
          },
          "name": "user",
          "type": "association"
        },
        {"data": {}, "name": "createdAt", "type": "date"},
        {"data": {}, "name": "updatedAt", "type": "date"}
      ]
    },
    {
      "name": "logs",
      "scopes": [],
      "tableName": "logs",
      "attributes": [
        {"data": {}, "name": "createdAt", "type": "date"},
        {"data": {}, "name": "updatedAt", "type": "date"},
        {
          "data": {
            "many": false,
            "model": "users",
            "ownKey": "logs_id",
            "tableName": "logs_users__user_assoc",
            "foreignKey": "users_id"
          },
          "name": "user",
          "type": "association"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "body",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "recordType",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "recordId",
          "type": "string"
        }
      ]
    },
    {
      "name": "textMessages",
      "scopes": [],
      "tableName": "textMessages",
      "attributes": [
        {
          "data": {
            "required": true,
            "preserveCase": true,
            "caseInsensitive": false
          },
          "name": "to",
          "type": "string"
        },
        {
          "data": {
            "required": true,
            "preserveCase": true,
            "caseInsensitive": false
          },
          "name": "body",
          "type": "string"
        },
        {
          "data": {
            "many": false,
            "model": "textMessages",
            "ownKey": "textMessages_id",
            "tableName": "textMessages_textMessages__root_assoc",
            "foreignKey": "textMessages_id_2"
          },
          "name": "root",
          "type": "association"
        },
        {
          "data": {"default": {"now": true}},
          "name": "createdAt",
          "type": "date"
        },
        {
          "data": {
            "many": true,
            "model": "textMessages",
            "ownKey": "textMessages_id_2",
            "inverseOf": "root",
            "tableName": "textMessages_textMessages__root_assoc",
            "foreignKey": "textMessages_id"
          },
          "name": "replies",
          "type": "association"
        },
        {
          "data": {"default": {"now": true}},
          "name": "updatedAt",
          "type": "date"
        },
        {"data": {"default": false}, "name": "failedToSend", "type": "boolean"}
      ]
    },
    {
      "name": "emails",
      "scopes": [],
      "tableName": "emails",
      "attributes": [
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "to",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "from",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "subject",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "body",
          "type": "string"
        },
        {
          "data": {"default": {"now": true}},
          "name": "createdAt",
          "type": "date"
        },
        {
          "data": {
            "many": false,
            "model": "emails",
            "ownKey": "emails_id",
            "tableName": "emails_emails__root_assoc",
            "foreignKey": "emails_id_2"
          },
          "name": "root",
          "type": "association"
        },
        {
          "data": {
            "many": true,
            "model": "emails",
            "ownKey": "emails_id_2",
            "inverseOf": "root",
            "tableName": "emails_emails__root_assoc",
            "foreignKey": "emails_id"
          },
          "name": "replies",
          "type": "association"
        },
        {
          "data": {"default": {"now": true}},
          "name": "updatedAt",
          "type": "date"
        },
        {
          "data": {
            "many": false,
            "model": "emails",
            "ownKey": "emails_id",
            "tableName": "emails_emails__parent_assoc",
            "foreignKey": "emails_id_2"
          },
          "name": "parent",
          "type": "association"
        },
        {
          "data": {
            "many": true,
            "model": "emails",
            "ownKey": "emails_id_2",
            "inverseOf": "parent",
            "tableName": "emails_emails__parent_assoc",
            "foreignKey": "emails_id"
          },
          "name": "children",
          "type": "association"
        },
        {"data": {"default": false}, "name": "failedToSend", "type": "boolean"},
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "originalEmailContent",
          "type": "string"
        },
        {
          "data": {
            "unique": true,
            "preserveCase": true,
            "caseInsensitive": false
          },
          "name": "googleId",
          "type": "string"
        },
        {
          "data": {
            "many": false,
            "model": "enquiries",
            "ownKey": "emails_id",
            "tableName": "emails_enquiries__enquiry_assoc",
            "foreignKey": "enquiries_id"
          },
          "name": "enquiry",
          "type": "association"
        },
        {"data": {"default": false}, "name": "incoming", "type": "boolean"},
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "toName",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "fromName",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "replyName",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "replyEmail",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "metaData",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "outgoingToEmail",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "outgoingToName",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "outgoingFromName",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "outgoingFromEmail",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "outgoingReplyToEmail",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "outgoingReplyToName",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "outgoingSubject",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "outgoingBody",
          "type": "string"
        }
      ]
    },
    {
      "name": "properties_no_results_requests",
      "scopes": [],
      "tableName": "properties_no_results_requests",
      "attributes": [
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "email",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "link",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "linkParam",
          "type": "string"
        },
        {"data": {}, "name": "createdAt", "type": "date"},
        {"data": {}, "name": "updatedAt", "type": "date"},
        {
          "data": {
            "many": false,
            "model": "users",
            "ownKey": "properties_no_results_requests_id",
            "tableName": "properties_no_results_requests_users__user_assoc",
            "foreignKey": "users_id"
          },
          "name": "user",
          "type": "association"
        }
      ]
    },
    {
      "name": "bookings",
      "scopes": [],
      "tableName": "bookings",
      "attributes": [
        {
          "data": {"default": {"now": true}},
          "name": "createdAt",
          "type": "date"
        },
        {
          "data": {"default": {"now": true}},
          "name": "updatedAt",
          "type": "date"
        },
        {
          "data": {
            "many": false,
            "model": "properties",
            "ownKey": "bookings_id",
            "tableName": "bookings_properties__property_assoc",
            "foreignKey": "properties_id"
          },
          "name": "property",
          "type": "association"
        },
        {
          "data": {
            "many": false,
            "model": "rooms",
            "ownKey": "bookings_id",
            "tableName": "bookings_rooms__room_assoc",
            "foreignKey": "rooms_id"
          },
          "name": "room",
          "type": "association"
        },
        {
          "data": {
            "many": true,
            "model": "users",
            "ownKey": "bookings_id",
            "tableName": "bookings_users__users_assoc",
            "foreignKey": "users_id"
          },
          "name": "users",
          "type": "association"
        },
        {
          "data": {
            "many": false,
            "model": "enquiries",
            "ownKey": "bookings_id",
            "tableName": "bookings_enquiries__enquiry_assoc",
            "foreignKey": "enquiries_id"
          },
          "name": "enquiry",
          "type": "association"
        },
        {"data": {}, "name": "when", "type": "date"},
        {
          "data": {
            "many": true,
            "model": "bookingTimes",
            "ownKey": "bookings_id",
            "tableName": "bookings_bookingTimes__bookingTimes_assoc",
            "foreignKey": "bookingTimes_id"
          },
          "name": "bookingTimes",
          "type": "association"
        }
      ]
    },
    {
      "name": "bookingTimes",
      "scopes": [],
      "tableName": "bookingTimes",
      "attributes": [
        {
          "data": {"default": {"now": true}},
          "name": "createdAt",
          "type": "date"
        },
        {
          "data": {"default": {"now": true}},
          "name": "updatedAt",
          "type": "date"
        },
        {"data": {}, "name": "when", "type": "date"},
        {
          "data": {
            "many": false,
            "model": "bookings",
            "ownKey": "bookingTimes_id",
            "inverseOf": "bookingTimes",
            "tableName": "bookings_bookingTimes__bookingTimes_assoc",
            "foreignKey": "bookings_id"
          },
          "name": "booking",
          "type": "association"
        },
        {
          "data": {
            "default": "pending",
            "preserveCase": true,
            "caseInsensitive": false
          },
          "name": "status",
          "type": "string"
        }
      ]
    },
    {
      "name": "googleRefreshTokens",
      "scopes": [],
      "tableName": "googleRefreshTokens",
      "attributes": [
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "token",
          "type": "string"
        }
      ]
    },
    {
      "name": "cityInfo",
      "scopes": [],
      "tableName": "cityInfo",
      "attributes": [
        {"data": {}, "name": "averageBill", "type": "number"},
        {"data": {}, "name": "averageHallsRent", "type": "number"},
        {"data": {}, "name": "priceOfABeer", "type": "number"},
        {"data": {}, "name": "averageRent", "type": "number"},
        {
          "data": {
            "many": false,
            "model": "pages",
            "ownKey": "cityInfo_id",
            "tableName": "cityInfo_pages__page_assoc",
            "foreignKey": "pages_id"
          },
          "name": "page",
          "type": "association"
        },
        {
          "data": {
            "many": true,
            "model": "cityInfoSearchLinks",
            "ownKey": "cityInfo_id",
            "inverseOf": "cityInfo",
            "tableName": "cityInfoSearchLinks_cityInfo__cityInfo_assoc",
            "foreignKey": "cityInfoSearchLinks_id"
          },
          "name": "cityInfoSearchLinks",
          "type": "association"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "seeAllAccommodationLink",
          "type": "string"
        },
        {
          "data": {
            "many": true,
            "model": "agents",
            "ownKey": "cityInfo_id",
            "tableName": "cityInfo_agents__agents_assoc",
            "foreignKey": "agents_id"
          },
          "name": "agents",
          "type": "association"
        },
        {
          "data": {
            "many": true,
            "model": "blogPosts",
            "ownKey": "cityInfo_id",
            "tableName": "cityInfo_blogPosts__blogs_assoc",
            "foreignKey": "blogPosts_id"
          },
          "name": "blogs",
          "type": "association"
        },
        {"data": {"many": false}, "name": "hallsImage", "type": "image"},
        {"data": {"many": false}, "name": "flatsImage", "type": "image"},
        {"data": {"many": false}, "name": "housesImage", "type": "image"}
      ]
    },
    {
      "name": "cityInfoSearchLinks",
      "scopes": [],
      "tableName": "cityInfoSearchLinks",
      "attributes": [
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "section",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "to",
          "type": "string"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "content",
          "type": "string"
        },
        {
          "data": {
            "many": false,
            "model": "cityInfo",
            "ownKey": "cityInfoSearchLinks_id",
            "tableName": "cityInfoSearchLinks_cityInfo__cityInfo_assoc",
            "foreignKey": "cityInfo_id"
          },
          "name": "cityInfo",
          "type": "association"
        }
      ]
    },
    {
      "name": "installments",
      "scopes": [],
      "tableName": "installments",
      "attributes": [
        {
          "data": {
            "many": false,
            "model": "tenancies",
            "ownKey": "installments_id",
            "tableName": "installments_tenancies__tenancy_assoc",
            "foreignKey": "tenancies_id"
          },
          "name": "tenancy",
          "type": "association"
        },
        {"data": {}, "name": "date", "type": "date"},
        {"data": {"required": true}, "name": "amountPennies", "type": "number"},
        {
          "data": {"default": 0, "required": true},
          "name": "refundedPennies",
          "type": "number"
        },
        {"data": {}, "name": "refundedAt", "type": "date"},
        {
          "data": {"default": {"now": true}},
          "name": "createdAt",
          "type": "date"
        },
        {
          "data": {"default": {"now": true}},
          "name": "updatedAt",
          "type": "date"
        },
        {"data": {}, "name": "paidAt", "type": "date"},
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "stripeChargeId",
          "type": "string"
        },
        {
          "data": {"default": 0, "required": true},
          "name": "feeAmountPennies",
          "type": "number"
        }
      ],
      "permissions": {"admin": true}
    },
    {
      "name": "propertySearches",
      "scopes": [],
      "tableName": "propertySearches",
      "attributes": [
        {
          "data": {"default": {"now": true}},
          "name": "createdAt",
          "type": "date"
        },
        {
          "data": {"default": {"now": true}},
          "name": "updatedAt",
          "type": "date"
        },
        {"data": {}, "name": "minPrice", "type": "number"},
        {"data": {}, "name": "maxPrice", "type": "number"},
        {"data": {}, "name": "minBeds", "type": "number"},
        {"data": {}, "name": "maxBeds", "type": "number"},
        {"data": {}, "name": "minBathrooms", "type": "number"},
        {"data": {}, "name": "maxBathrooms", "type": "number"},
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "propertyType",
          "type": "string"
        },
        {"data": {}, "name": "lat", "type": "number"},
        {"data": {}, "name": "lng", "type": "number"},
        {"data": {"default": false}, "name": "vr", "type": "boolean"},
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "sort",
          "type": "string"
        },
        {
          "data": {
            "many": false,
            "model": "users",
            "ownKey": "propertySearches_id",
            "tableName": "propertySearches_users__user_assoc",
            "foreignKey": "users_id"
          },
          "name": "user",
          "type": "association"
        },
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "query",
          "type": "string"
        },
        {"data": {"default": false}, "name": "saved", "type": "boolean"},
        {"data": {}, "name": "resultCount", "type": "number"},
        {"data": {}, "name": "distance", "type": "number"},
        {
          "data": {"preserveCase": true, "caseInsensitive": false},
          "name": "images",
          "type": "string"
        }
      ]
    }
  ],
  "providers": [
    {
      "data": {"passAttribute": "password", "userAttribute": "email"},
      "name": "local",
      "type": "local",
      "model": "users",
      "roles": [
        {
          "name": "admin",
          "query": {"eq": [{"attr": "admin"}, {"value": true}]}
        },
        {"name": "agent", "query": {"eq": [{"attr": "agent"}, {"value": true}]}}
      ]
    }
  ]
}