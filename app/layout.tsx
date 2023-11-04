"use client"

import NavBar from "@/components/nav-bar";
import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({ defaultOptions: { queries: { retry: 0, refetchInterval: false, cacheTime: 0, refetchOnWindowFocus: false, refetchIntervalInBackground: false } } })

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <link rel="icon" type="image/svg+xml" href="/icon.svg" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&family=Roboto:wght@300;400;500&display=swap"
                    rel="stylesheet"
                />
                <title>My App</title>
                <meta name="description" content="My App is a..." />
            </head>
            <body>
                <NavBar />
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            </body>
        </html>
    );
}
