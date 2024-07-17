import { Layout } from '@/components/Layout'
import React, { ReactNode } from 'react'

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return <Layout>{children}</Layout>
}
