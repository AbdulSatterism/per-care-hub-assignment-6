"use client";

import { Select, SelectItem } from "@nextui-org/react";
import { useFormContext } from "react-hook-form";

interface ISelect {
  options: {
    key: string;
    label: string;
  }[];
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "sm" | "md" | "lg";
  name: string;
  required?: boolean;
  label: string;
  type?: string;
  disabled?: boolean;
}

const PCSelect = ({
  variant = "bordered",
  name,
  label,
  options,
  disabled,
  required = false,
}: ISelect) => {
  const {
    register,
    formState: {},
  } = useFormContext();

  return (
    <Select
      required={required}
      className="min-w-full  sm:min-w-[225px]"
      isDisabled={disabled}
      label={label}
      variant={variant}
      {...register(name)}
    >
      {options.map((option) => (
        <SelectItem key={option.key}>{option.label}</SelectItem>
      ))}
    </Select>
  );
};

export default PCSelect;
