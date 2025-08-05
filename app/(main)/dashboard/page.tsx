import { Logo } from "@/components/logo";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Welcome to the dashboard!</p>

      <div className="bg-primary p-4 rounded">
        <Logo size={200} />
      </div>
    </div>
  );
}
