import { DataTable } from "@/components/ui/data-table";
import { columns, Payment } from "@/app/(main)/reports/columns";
import { Card, CardContent } from "@/components/ui/card";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];
}

export default async function ReportsPage() {
  const data = await getData();
  return (
    <Card className="mx-auto py-2">
      <CardContent>
        <DataTable columns={columns} data={data} searchColumn="email" />
      </CardContent>
    </Card>
  );
}
