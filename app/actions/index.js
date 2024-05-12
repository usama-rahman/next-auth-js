"use server";

import { signOut } from "@/auth";

async function doSignout() {
  await signOut();
}

export { doSignout };
