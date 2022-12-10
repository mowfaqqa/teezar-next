import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "xhw3yb6x",
  dataset: "production",
  apiVersion: "2022-12-09",
  useCdn: false
});
