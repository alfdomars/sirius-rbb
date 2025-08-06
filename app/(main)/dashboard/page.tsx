import { Logo } from "@/components/logo";
import { Card, CardContent } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <Card className="mx-auto py-2">
      <CardContent>
        <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p>Welcome to the dashboard!</p>

          <div className="bg-primary p-4 rounded">
            <Logo size={200} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
