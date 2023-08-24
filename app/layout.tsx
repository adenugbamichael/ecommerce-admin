import type { Metadata } from "next"
import { ClerkProvider } from "@clerk/nextjs"

import { ModalProvider } from "@/providers/modal-provider"

import "./globals.css"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "E-Commerce Dashboard",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body>
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
