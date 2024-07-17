'use client'

import React, { ReactNode, useEffect } from 'react'

import { ThemeProvider } from 'styled-components'

import { Container } from './styles'
import StyledComponentsRegistry from '@/app/registry'
import { theme } from '@/themes/themes'
import { mainFont, secundaryFont } from '@/styles/fonts'
import { GlobalStyle } from '@/styles/global'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <html lang='pt-BR'>
          <body className={`${mainFont.variable} ${secundaryFont.variable}`}>
            <Container>{children}</Container>
          </body>
        </html>
        <GlobalStyle />
      </ThemeProvider>
    </StyledComponentsRegistry>
  )
}
