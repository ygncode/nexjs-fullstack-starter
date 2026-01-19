"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    // Note: Password reset requires email provider configuration
    // See Better Auth docs: https://www.better-auth.com/docs/authentication/email-password
    // Configure sendResetPassword in your auth server config

    // Simulate submission for now
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    setLoading(false);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-muted/30 px-4">
      <Card className="w-full max-w-md border-border/40 shadow-xl">
        <CardHeader className="space-y-1 pb-6">
          <CardTitle className="text-2xl font-semibold tracking-tight">
            Reset password
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Enter your email and we&apos;ll send you a reset link
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {submitted ? (
            <div className="space-y-4">
              <div className="rounded-lg bg-primary/10 p-4 text-sm text-primary">
                <p className="font-medium">Check your email</p>
                <p className="mt-1 text-primary/80">
                  If an account exists with that email, we&apos;ve sent a
                  password reset link.
                </p>
              </div>
              <Button asChild variant="outline" className="w-full h-11">
                <Link href="/sign-in">Back to sign in</Link>
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="rounded-lg bg-muted/50 p-3 text-sm text-muted-foreground">
                Note: Email sending requires SMTP configuration. See the setup
                guide.
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  autoComplete="email"
                  className="h-11"
                />
              </div>

              <Button type="submit" className="w-full h-11" disabled={loading}>
                {loading ? "Sending..." : "Send reset link"}
              </Button>

              <Button asChild variant="ghost" className="w-full h-11">
                <Link href="/sign-in">Back to sign in</Link>
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
