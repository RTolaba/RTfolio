import { auth } from "@/auth";
import { AdminLoginForm } from "@/modules/admin";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();

  if (session) {
    redirect("/admin");
  }

  return <AdminLoginForm />;
}
