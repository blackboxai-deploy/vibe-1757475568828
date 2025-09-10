"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="max-w-7xl mx-auto text-center">
          {/* Agent Hero Title */}
          <div className="mb-8 animate-slide-up-gentle">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 agent-heading">
              <span className="agent-text-primary animate-glow-agent">APEX</span>
              <span className="agent-text-highlight ml-4">AGENT</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Advanced Personal Executive Assistant Agent That 
              <span className="agent-text-highlight font-semibold"> Autonomously</span> Orchestrates Your Business Ecosystem
            </p>
          </div>

          {/* Agent Logo Showcase */}
          <div className="mb-12 relative animate-scale-in">
            <div className="w-64 h-64 mx-auto relative">
              <Image
                src="/apex-agent-logo.png"
                alt="APEX AI Agent - Advanced Personal Executive Assistant Logo"
                fill
                className="object-contain agent-logo-glow animate-pulse-agent"
                priority
              />
              {/* Professional glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-agent-accent/10 to-agent-highlight/10 rounded-full blur-2xl animate-pulse-agent" />
            </div>
            
            {/* Agent Brand Text */}
            <div className="mt-8 text-center">
              <div className="text-4xl font-bold agent-text-primary mb-2 animate-glow-agent agent-heading">APEX</div>
              <div className="text-3xl font-semibold agent-text-highlight">AGENT</div>
              <div className="text-sm text-gray-400 mt-2 font-medium">Advanced Personal Executive Assistant</div>
            </div>
          </div>

          {/* Agent Hero Image */}
          <div className="mb-12 relative animate-fade-in">
            <img 
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/af8dc5cc-81dc-4652-bec4-75e032cc1cc0.png"
              alt="APEX AGENT Professional Dashboard with sophisticated agent interface, business analytics, and autonomous workflow management"
              className="mx-auto rounded-2xl shadow-professional-deep agent-card"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-agent-primary/50 to-transparent" />
          </div>

          {/* Professional CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/dashboard" className="agent-button-primary px-8 py-4 text-white font-semibold text-lg rounded-xl">
              Launch Agent Dashboard
            </Link>
            <Link href="/chat" className="px-8 py-4 border-2 border-agent-accent text-agent-accent font-semibold text-lg rounded-xl hover:bg-agent-accent/10 transition-all duration-300 agent-border-glow">
              Chat with Agent
            </Link>
          </div>

          {/* Agent Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Autonomous Agent Execution",
                description: "Intelligent AI agents that independently manage complex business workflows with strategic decision-making",
                icon: "🤖",
                color: "agent-accent",
                delay: "0s"
              },
              {
                title: "Enterprise Platform Orchestration", 
                description: "Deep OAuth integration orchestrating Salesforce, Office 365, and 15+ enterprise platforms seamlessly",
                icon: "🔗",
                color: "agent-highlight",
                delay: "0.1s"
              },
              {
                title: "Advanced Behavioral Analytics",
                description: "Machine learning agents that analyze patterns and adapt to your executive decision-making style",
                icon: "📊", 
                color: "agent-accent",
                delay: "0.2s"
              },
              {
                title: "Multi-Modal Intelligence",
                description: "Process documents, voice, video, and data streams with state-of-the-art AI agent capabilities",
                icon: "🧠",
                color: "agent-highlight",
                delay: "0.3s"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="agent-card rounded-xl p-6 hover:shadow-agent-glow transition-all duration-500 agent-hover-lift animate-slide-up-gentle"
                style={{ animationDelay: feature.delay }}
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className={`text-xl font-semibold mb-3 agent-heading ${
                  feature.color === 'agent-accent' ? 'agent-text-primary' : 'agent-text-highlight'
                }`}>
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Agent Integration Showcase */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-agent-secondary/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold agent-text-primary mb-4 agent-heading">
            Agent Platform Orchestration
          </h2>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            Your AI agent seamlessly orchestrates all your business platforms through secure enterprise integrations
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
            {[
              'Salesforce', 'Microsoft 365', 'Google Workspace', 'Slack', 'Jira',
              'Asana', 'Zoom', 'Teams', 'Discord', 'Notion'
            ].map((tool, index) => (
              <div 
                key={tool} 
                className="agent-card rounded-xl p-6 hover:shadow-agent-glow transition-all duration-300 animate-slide-up-gentle agent-hover-lift"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-sm font-medium text-gray-300">{tool}</div>
              </div>
            ))}
          </div>

          <div className="agent-card rounded-2xl p-8 max-w-5xl mx-auto">
            <img 
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c5b11cf2-eccb-49a8-82d4-24fc35dd9ad9.png"
              alt="APEX AGENT Enterprise Integration Dashboard with sophisticated agent orchestration and business platform management"
              className="rounded-xl mx-auto shadow-professional-deep"
            />
          </div>
        </div>
      </section>

      {/* Agent CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-agent-accent/8 to-agent-highlight/8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 agent-heading">
            Ready to Deploy Your <span className="agent-text-primary">APEX AGENT</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join enterprise leaders who deploy intelligent AI agents for autonomous business orchestration
          </p>
          <Link href="/dashboard" className="agent-button-primary inline-block px-12 py-4 text-white font-semibold text-xl rounded-xl">
            Deploy Agent Now
          </Link>
        </div>
      </section>
    </div>
  )
}