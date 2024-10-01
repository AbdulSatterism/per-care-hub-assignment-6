"use client";

import { ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import UserProvider from "@/context/user.provider";

const queryClient = new QueryClient();

export function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Toaster />
        <NextUIProvider>{children}</NextUIProvider>
      </UserProvider>
    </QueryClientProvider>
  );
}
