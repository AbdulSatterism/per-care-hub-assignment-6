"use client";

import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import UserProvider from "@/context/user.provider";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/navigation";
import { ThemeProviderProps } from "next-themes/dist/types";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

const queryClient = new QueryClient();

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    // <QueryClientProvider client={queryClient}>
    //   <UserProvider>
    //     <Toaster />
    //     <NextUIProvider navigate={router.push}>{children}</NextUIProvider>
    //   </UserProvider>
    // </QueryClientProvider>
    <QueryClientProvider client={queryClient}>
      <NextUIProvider navigate={router.push}>
        <UserProvider>
          <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
          <Toaster />
        </UserProvider>
      </NextUIProvider>
    </QueryClientProvider>
  );
}
