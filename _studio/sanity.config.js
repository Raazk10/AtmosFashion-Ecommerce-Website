import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";

import schemas from "./schemas/schemas.js";
import settings from "./structure/settings.js";
import otherDocument from "./structure/otherDocument.js";
import contact from "./structure/contact.js";

export default {
  title: "Studio",

  projectId: "xz8hst79",
  dataset: "production",

  plugins: [
    deskTool({
      title: "Other Document",
      name: "otherDocument",
      structure: otherDocument,
    }),
    deskTool({
      title: "Settings",
      name: "settings",
      structure: settings,
    }),
    deskTool({
      title: "Contact",
      name: "contact",
      structure: contact,
    }),
    visionTool(),
  ],

  schema: {
    types: schemas,
  },
};
