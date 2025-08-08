"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CollapsibleCard } from "@/components/collapsible-card";
import { Card, CardContent } from "@/components/ui/card";
import { InputField } from "@/components/form/input-field";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { reportSchema, reportDefaultValues, ReportSchema } from "@/types/zod";

export default function CreateReportsPage() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ReportSchema>({
    resolver: zodResolver(reportSchema),
    defaultValues: reportDefaultValues,
  });

  async function onSubmit(values: ReportSchema) {
    setIsLoading(true);
    try {
      console.log("Submitted", values);

      await new Promise((resolve) => setTimeout(resolve, 1500));
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="mx-auto py-2">
      <CardContent className="space-y-6 px-4 py-2">
        <CollapsibleCard title="Report Information">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-6 gap-4"
            >
              <InputField name="okt_2024" label="Okt 2024" />
              <InputField name="nov_2024" label="Nov 2024" />
              <InputField name="des_2024" label="Des 2024" />
              <InputField name="jan_2025" label="Jan 2025" />
              <InputField name="feb_2025" label="Feb 2025" />
              <InputField name="mar_2025" label="Mar 2025" />
              <InputField name="apr_2025" label="Apr 2025" />
              <InputField name="mei_2025" label="Mei 2025" />
              <InputField name="jun_2025" label="Jun 2025" />
              <InputField name="jul_2025" label="Jul 2025" />
              <InputField name="agu_2025" label="Agu 2025" />
              <InputField name="sep_2025" label="Sep 2025" />
              <InputField name="okt_2025" label="Okt 2025" />
              <InputField name="nov_2025" label="Nov 2025" />
              <InputField name="des_2025" label="Des 2025" />
            </form>
          </Form>
        </CollapsibleCard>
        <Button type="submit" className="w-1" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit"}
        </Button>
      </CardContent>
    </Card>
  );
}
