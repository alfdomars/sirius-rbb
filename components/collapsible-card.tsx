"use client";

import * as React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface CollapsibleCardProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export function CollapsibleCard({
  title,
  children,
  defaultOpen = true,
  className = "",
}: CollapsibleCardProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <Card className={`py-3 ${className}`}>
        <CardHeader className="flex flex-row items-center justify-between px-4">
          <CardTitle className="text-base font-medium">{title}</CardTitle>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="icon">
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </Button>
          </CollapsibleTrigger>
        </CardHeader>
        <CollapsibleContent>
          <CardContent className="px-4 py-0">{children}</CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
}
