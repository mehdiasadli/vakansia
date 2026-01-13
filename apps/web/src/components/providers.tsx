"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "@vakansia/next-ui/components/theme-provider";
import { Toaster } from "@vakansia/next-ui/ui/sonner";
import { queryClient } from "@/utils/orpc";

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider>
			<QueryClientProvider client={queryClient}>
				{children}
				<ReactQueryDevtools />
			</QueryClientProvider>
			<Toaster richColors />
		</ThemeProvider>
	);
}
