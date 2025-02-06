import React from 'react'

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-emerald-600 text-white">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold">MALYARI</h1>
          <p className="text-emerald-100">Your Mental Health AI Assistant</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-gray-800 text-white mt-auto">
        <div className="container mx-auto px-4 py-6 text-center">
          <p>© 2024 MALYARI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
