import { getCurrentUser } from "@/lib/auth/session";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default async function DashboardPage() {
  const user = await getCurrentUser();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Welcome back, {user?.name || "there"}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Account</CardTitle>
            <CardDescription>Your account information</CardDescription>
          </CardHeader>
          <CardContent>
            <dl className="space-y-2 text-sm">
              <div>
                <dt className="text-muted-foreground">Name</dt>
                <dd className="font-medium">{user?.name || "Not set"}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Email</dt>
                <dd className="font-medium">{user?.email}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Email verified</dt>
                <dd className="font-medium">{user?.emailVerified ? "Yes" : "No"}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
            <CardDescription>Common tasks and settings</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/settings"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  Update profile
                </a>
              </li>
              <li>
                <a
                  href="/settings"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  Change password
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Getting Started</CardTitle>
            <CardDescription>Next steps for your app</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Add more features to the dashboard</li>
              <li>Configure Google OAuth credentials</li>
              <li>Set up email verification</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
