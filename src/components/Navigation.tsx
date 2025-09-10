"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'

export function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/knowledge-base', label: 'Knowledge Base' },
    { href: '/integrations', label: 'Integrations' },
    { href: '/chat', label: 'AI Agent' },
    { href: '/agent-config', label: 'Agent Config' }
  ]

  return (
    <nav className="sticky top-0 z-50 agent-glass border-b border-agent-border/20 shadow-professional-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Agent Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12">
              <Image
                src="/apex-agent-logo.png"
                alt="APEX AI Agent Logo"
                fill
                className="object-contain agent-logo-glow group-hover:animate-glow-agent transition-all duration-300"
                priority
              />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold agent-text-primary group-hover:animate-glow-agent agent-heading">
                APEX
              </span>
              <span className="text-lg font-semibold agent-text-highlight">
                AGENT
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  pathname === item.href
                    ? 'text-white bg-agent-accent/20 agent-border-glow border-agent-accent'
                    : 'text-gray-300 hover:text-agent-accent hover:bg-agent-accent/5 agent-hover-lift'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Agent Status Indicator */}
          <div className="hidden md:flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 status-online-agent rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-400 font-medium">Agent Online</span>
            </div>
            <div className="text-xs text-agent-highlight font-semibold">
              v3.0
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-agent-accent/10 text-agent-accent hover:bg-agent-accent/20 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-agent-border/20 agent-glass">
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    pathname === item.href
                      ? 'text-white bg-agent-accent/20 agent-border-glow border-agent-accent'
                      : 'text-gray-300 hover:text-agent-accent hover:bg-agent-accent/5'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}