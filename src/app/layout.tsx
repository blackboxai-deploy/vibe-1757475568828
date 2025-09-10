import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'APEX AI Agent - Advanced Personal Executive Assistant',
  description: 'Autonomous AI agent that integrates with all your business platforms, learns from your behavior, and executes tasks intelligently with sophisticated agent-driven automation.',
  keywords: ['AI agent', 'automation', 'productivity', 'executive assistant', 'workflow', 'autonomous', 'intelligent', 'business platforms'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className="min-h-screen bg-agent-primary text-white antialiased">
        <div className="relative min-h-screen">
          {/* Professional agent-themed gradient background */}
          <div className="fixed inset-0 bg-gradient-to-br from-agent-primary via-agent-secondary to-agent-elevated -z-10" />
          
          {/* Sophisticated ambient elements inspired by the agent logo */}
          <div className="fixed inset-0 overflow-hidden -z-10">
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-agent-accent/8 rounded-full blur-3xl animate-pulse-agent" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-agent-highlight/6 rounded-full blur-3xl animate-pulse-agent" style={{ animationDelay: '1.5s' }} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-agent-accent/4 rounded-full blur-3xl animate-pulse-agent" style={{ animationDelay: '3s' }} />
          </div>

          {/* Subtle grid pattern overlay for tech sophistication */}
          <div className="fixed inset-0 opacity-[0.02] -z-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }} />
          </div>

          <Navigation />
          <main className="relative z-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}