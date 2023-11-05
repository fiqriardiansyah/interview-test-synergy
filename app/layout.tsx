"use client";

import NavBar from "@/components/navigation-bar/nav-bar";
import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppProgressBar } from "next-nprogress-bar";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 0,
            refetchInterval: false,
            cacheTime: 0,
            refetchOnWindowFocus: false,
            refetchIntervalInBackground: false,
        },
    },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <link rel="icon" type="image/png" href="/icon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
                <title>Fiqri Corp</title>
                <meta name="description" content="Synergy test" />
            </head>
            <body>
                <AppProgressBar height="3px" color="#000000" options={{ showSpinner: false, parent: "body" }} shallowRouting />
                <NavBar />
                <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
            </body>
        </html>
    );
}
