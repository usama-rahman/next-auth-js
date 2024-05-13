"use server";

import { signIn, signOut } from "@/auth";

async function doSignout() {
  await signOut();
}

async function doSignIn() {
  await signIn("google", { callbackUrl: "http://localhost:3000/" });
}

export { doSignout, doSignIn };
