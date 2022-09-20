import React from 'react'
import { AppProvider } from './AppContext'



export default function AppLayout({children}) {

  return (
    <AppProvider>
    <main>{children}</main>
    </AppProvider>
  )
}
