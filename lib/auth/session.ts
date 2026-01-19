import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "./server";

export async function getSession() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return session;
}

export async function requireAuth() {
  const session = await getSession();
  if (!session) {
    redirect("/sign-in");
  }
  return session;
}

export async function getCurrentUser() {
  const session = await getSession();
  return session?.user ?? null;
}
