import { DataTable } from "@/components/ui/data-table";
import { columns, Payment } from "@/app/(main)/reports/columns";
import { CollapsibleCard } from "@/components/collapsible-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
    <div className="@container/main flex flex-1 flex-col gap-2">
      <Tabs
        defaultValue="outline"
        className="w-full flex-col justify-start gap-6"
      >
        <div className="flex items-center justify-between px-4 lg:px-6">
          <Label htmlFor="view-selector" className="sr-only">
            View
          </Label>
          <Select defaultValue="outline">
            <SelectTrigger
              className="flex w-fit @4xl/main:hidden"
              size="sm"
              id="view-selector"
            >
              <SelectValue placeholder="Select a view" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="outline">Outline</SelectItem>
              <SelectItem value="past-performance">Past Performance</SelectItem>
              <SelectItem value="key-personnel">Key Personnel</SelectItem>
              <SelectItem value="focus-documents">Focus Documents</SelectItem>
            </SelectContent>
          </Select>
          <TabsList className="hidden @4xl/main:flex">
            <TabsTrigger value="outline">Outline</TabsTrigger>
            <TabsTrigger value="past-performance">Past Performance</TabsTrigger>
            <TabsTrigger value="key-personnel">Key Personnel</TabsTrigger>
            <TabsTrigger value="focus-documents">Focus Documents</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="outline" className="flex flex-col px-4 lg:px-6">
          <div className="aspect-video w-full flex-1 rounded-lg border border-dashed">
            <CollapsibleCard title="Reports" className="mx-auto py-6">
              <DataTable columns={columns} data={data} searchColumn="email" />
            </CollapsibleCard>
          </div>
        </TabsContent>
        <TabsContent
          value="past-performance"
          className="flex flex-col px-4 lg:px-6"
        >
          <div className="aspect-video w-full flex-1 rounded-lg border border-dashed"></div>
        </TabsContent>
        <TabsContent
          value="key-personnel"
          className="flex flex-col px-4 lg:px-6"
        >
          <div className="aspect-video w-full flex-1 rounded-lg border border-dashed"></div>
        </TabsContent>
        <TabsContent
          value="focus-documents"
          className="flex flex-col px-4 lg:px-6"
        >
          <div className="aspect-video w-full flex-1 rounded-lg border border-dashed"></div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
