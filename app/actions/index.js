"use server";

import { signIn, signOut } from "@/auth";

async function doSignout() {
  await signOut();
}

async function doSignIn() {
  await signIn("google", { callbackUrl: "http://localhost:3000/" });
}

async function login(formData) {
  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    return response;
  } catch (error) {
    throw error;
  }
}

export { login, doSignout, doSignIn };
