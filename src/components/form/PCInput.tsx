"use client";

import { Input } from "@nextui-org/react";
import React from "react";
import { useFormContext } from "react-hook-form";

type TInputProps = {
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "sm" | "md" | "lg";
  name: string;
  required?: boolean;
  label: string;
  type?: string;
  defaultValue?: string;
};

const PCInput = ({
  variant = "bordered",
  size = "md",
  name,
  required = false,
  label,
  defaultValue,
  type = "text",
}: TInputProps) => {
  const { register } = useFormContext();

  return (
    <Input
      defaultValue={defaultValue}
      variant={variant}
      {...register(name)}
      label={label}
      required={required}
      size={size}
      type={type}
    />
  );
};

export default PCInput;
