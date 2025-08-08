// components/ui/form/input-field.tsx
"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  showPasswordToggle?: boolean;
}

export function InputField({
  name,
  label,
  showPasswordToggle,
  type,
  ...props
}: InputFieldProps) {
  const { control } = useFormContext();
  const [visible, setVisible] = useState(false);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <div className="relative">
              <Input
                {...field}
                {...props}
                type={
                  showPasswordToggle ? (visible ? "text" : "password") : type
                }
              />
              {showPasswordToggle && (
                <button
                  type="button"
                  onClick={() => setVisible((v) => !v)}
                  className="absolute right-3 top-2.5 text-muted-foreground"
                  tabIndex={-1}
                >
                  {visible ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
