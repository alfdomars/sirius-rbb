import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CollapsibleCard } from "@/components/collapsible-card";
import { Card, CardContent } from "@/components/ui/card";

export default function CreateReportsPage() {
  return (
    <Card className="mx-auto py-2">
      <CardContent className="space-y-6 px-4 py-2">
        <CollapsibleCard title="Report Information">
          <Label className="py-2" htmlFor="report-title">
            Report Title
          </Label>
          <Input className="mb-4" id="report-title" />
          <Label className="py-2" htmlFor="report-desc">
            Description
          </Label>
          <Input id="report-desc" />
        </CollapsibleCard>

        <CollapsibleCard title="Reporter Details" defaultOpen={false}>
          <div className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="reporter-name">Reporter Name</Label>
              <Input id="reporter-name" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="reporter-email">Email</Label>
              <Input id="reporter-email" />
            </div>
          </div>
        </CollapsibleCard>

        <div className="pt-4">
          <Button type="submit">Submit Report</Button>
        </div>
      </CardContent>
    </Card>
  );
}
