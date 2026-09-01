"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, Card, Input } from "@/components/ui";

export function AdminLoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const result = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    setPending(false);

    if (result?.error) {
      setError("Credenciales inválidas");
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <Card className="max-w-md">
      <h1 className="text-xl font-semibold">Admin login</h1>
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
        <Input label="Email" name="email" type="email" required />
        <Input label="Password" name="password" type="password" required />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <Button type="submit" disabled={pending}>
          {pending ? "Entrando..." : "Ingresar"}
        </Button>
      </form>
    </Card>
  );
}
