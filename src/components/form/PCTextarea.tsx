"use client";

import { Textarea } from "@nextui-org/react";
import { useFormContext } from "react-hook-form";

type TInputProps = {
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "sm" | "md" | "lg";
  name: string;
  required?: boolean;
  label: string;
  type?: string;
};

export default function PXTextarea({
  name,
  label,
  variant = "bordered",
  required = false,
}: TInputProps) {
  const {
    register,
    formState: {},
  } = useFormContext();

  return (
    <Textarea
      {...register(name)}
      required={required}
      label={label}
      minRows={6}
      variant={variant}
    />
  );
}
