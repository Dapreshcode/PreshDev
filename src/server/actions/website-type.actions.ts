"use server";

import { getWebsiteTypes } from "../services/website-type.service";

export async function fetchWebsiteTypes() {
  return await getWebsiteTypes();
}