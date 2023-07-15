import "@/styles/globals.scss"
import React from "react"
import { Metadata } from "next"
import { ClerkProvider } from "@clerk/nextjs"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import ActionsBar from "@/components/header/ActionsBar"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

import ExploreAside from "./../components/ExploreAside"
import Sidebar from "./../components/Sidebar"
import Tabsbar from "./../components/Tabsbar"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
  pathname: string
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <ClerkProvider>
        <html lang="en">
          <body
            className={cn(
              "bg-background fira-code min-h-screen font-sans antialiased"
            )}
          >
            <SiteHeader />
            <ActionsBar />
            <div className="relative flex min-h-screen bg-body">
              <div className="flex">
                <Sidebar />
                <ExploreAside />
              </div>
              <div style={{ width: "100%" }}>
                <Tabsbar />
                <main className="h-[85vh] flex-1 p-2">{children}</main>
              </div>
              <div className="flex-1">{children}</div>
            </div>
          </body>
        </html>
      </ClerkProvider>
    </>
  )
}