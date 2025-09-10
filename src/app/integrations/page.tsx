"use client"

import { useState, useEffect } from 'react'

export default function IntegrationsPage() {
  const [mounted, setMounted] = useState(false)
  const [connections, setConnections] = useState<{[key: string]: boolean}>({
    'salesforce': true,
    'microsoft365': false,
    'google_workspace': false,
    'slack': true,
    'zoom': false,
    'jira': false
  })

  const agentIntegrations = [
    {
      id: 'salesforce',
      name: 'Salesforce CRM',
      description: 'Autonomous CRM orchestration with intelligent lead management and opportunity tracking',
      icon: '☁️',
      category: 'crm',
      agentFeatures: ['Autonomous Lead Scoring', 'Opportunity Orchestration', 'Account Intelligence', 'Pipeline Prediction'],
      orchestrationLevel: 'Full Autonomous',
      setupTime: '5 min'
    },
    {
      id: 'microsoft365',
      name: 'Microsoft Office 365',
      description: 'Complete Office suite orchestration with email intelligence and calendar automation',
      icon: '📧',
      category: 'productivity',
      agentFeatures: ['Email Orchestration', 'Calendar Intelligence', 'Document Processing', 'Teams Integration'],
      orchestrationLevel: 'Advanced Autonomous',
      setupTime: '3 min'
    },
    {
      id: 'google_workspace',
      name: 'Google Workspace',
      description: 'Gmail intelligence, Drive orchestration, and workspace coordination',
      icon: '🌐',
      category: 'productivity',
      agentFeatures: ['Gmail Intelligence', 'Drive Orchestration', 'Calendar Coordination', 'Meet Analytics'],
      orchestrationLevel: 'Advanced Autonomous',
      setupTime: '4 min'
    },
    {
      id: 'slack',
      name: 'Slack Communications',
      description: 'Intelligent communication orchestration and team productivity automation',
      icon: '💬',
      category: 'communication',
      agentFeatures: ['Response Automation', 'Meeting Orchestration', 'Team Analytics', 'Workflow Triggers'],
      orchestrationLevel: 'Full Autonomous',
      setupTime: '2 min'
    },
    {
      id: 'zoom',
      name: 'Zoom Video Conferencing',
      description: 'Meeting intelligence with autonomous scheduling and follow-up orchestration',
      icon: '📹',
      category: 'communication',
      agentFeatures: ['Meeting Intelligence', 'Auto Scheduling', 'Recording Analysis', 'Follow-up Orchestration'],
      orchestrationLevel: 'Advanced Autonomous',
      setupTime: '3 min'
    },
    {
      id: 'jira',
      name: 'Jira Project Management',
      description: 'Autonomous project orchestration with sprint planning and team coordination',
      icon: '📊',
      category: 'project-management',
      agentFeatures: ['Project Orchestration', 'Sprint Intelligence', 'Progress Analytics', 'Team Coordination'],
      orchestrationLevel: 'Advanced Autonomous',
      setupTime: '6 min'
    }
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleConnect = async (integrationId: string) => {
    // Simulate OAuth connection
    setConnections(prev => ({
      ...prev,
      [integrationId]: !prev[integrationId]
    }))
  }

  const connectedCount = Object.values(connections).filter(Boolean).length
  const orchestrationScore = Math.round((connectedCount / agentIntegrations.length) * 100)

  if (!mounted) return null

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-slide-up-gentle">
          <h1 className="text-4xl font-bold agent-text-primary mb-2 agent-heading">
            Agent Platform Orchestration
          </h1>
          <p className="text-gray-400">
            Configure your AI agent's platform integrations for autonomous business orchestration.
          </p>
        </div>

        {/* Orchestration Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-8">
          <div className="agent-card rounded-xl p-6 hover:shadow-agent-glow transition-all">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-400 text-sm font-medium">Connected Platforms</h3>
              <span className="text-2xl">🔗</span>
            </div>
            <div className="text-3xl font-bold agent-text-primary">{connectedCount}</div>
            <p className="text-xs text-gray-500 mt-1">Active integrations</p>
          </div>

          <div className="agent-card rounded-xl p-6 hover:shadow-agent-success transition-all">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-400 text-sm font-medium">Orchestration Score</h3>
              <span className="text-2xl">🎯</span>
            </div>
            <div className="text-3xl font-bold agent-text-highlight">{orchestrationScore}%</div>
            <p className="text-xs text-gray-500 mt-1">Platform coverage</p>
          </div>

          <div className="agent-card rounded-xl p-6 hover:shadow-agent-warning transition-all">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-400 text-sm font-medium">Autonomous Actions</h3>
              <span className="text-2xl">⚡</span>
            </div>
            <div className="text-3xl font-bold text-agent-warning">{connectedCount * 147}</div>
            <p className="text-xs text-gray-500 mt-1">This month</p>
          </div>

          <div className="agent-card rounded-xl p-6 hover:shadow-agent-glow transition-all">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-400 text-sm font-medium">Agent Efficiency</h3>
              <span className="text-2xl">📈</span>
            </div>
            <div className="text-3xl font-bold agent-text-primary">97.8%</div>
            <p className="text-xs text-gray-500 mt-1">Success rate</p>
          </div>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agentIntegrations.map((integration) => {
            const isConnected = connections[integration.id]
            
            return (
              <div 
                key={integration.id}
                className={`agent-card rounded-xl p-6 transition-all duration-300 agent-hover-lift ${
                  isConnected
                    ? 'border-agent-highlight/50 shadow-agent-success' 
                    : 'hover:border-agent-accent/50 hover:shadow-agent-glow'
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{integration.icon}</div>
                    <div>
                      <h3 className="font-semibold text-white text-lg agent-heading">{integration.name}</h3>
                      <div className="flex items-center space-x-2">
                        <span className={`text-sm font-medium ${
                          isConnected ? 'agent-text-highlight' : 'text-gray-400'
                        }`}>
                          {isConnected ? 'Connected' : 'Available'}
                        </span>
                        <span className="text-gray-500">•</span>
                        <span className="text-xs text-gray-400">{integration.setupTime} setup</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    isConnected 
                      ? 'success-element'
                      : 'text-agent-accent bg-agent-accent/10'
                  }`}>
                    {integration.orchestrationLevel}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{integration.description}</p>

                {/* Agent Features */}
                <div className="mb-6">
                  <div className="text-xs text-gray-400 mb-2 font-medium">Agent Capabilities:</div>
                  <div className="flex flex-wrap gap-2">
                    {integration.agentFeatures.map((feature, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-agent-elevated text-xs rounded-full text-gray-300 border border-agent-border/50"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div>
                  {isConnected ? (
                    <div className="space-y-2">
                      <div className="w-full px-4 py-2 success-element text-center text-sm font-medium rounded-lg">
                        ✓ Agent Orchestrating
                      </div>
                      <button 
                        onClick={() => handleConnect(integration.id)}
                        className="w-full px-4 py-2 text-gray-400 hover:text-white border border-agent-border hover:border-gray-500 rounded-lg transition-colors text-sm"
                      >
                        Disconnect
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleConnect(integration.id)}
                      className="w-full agent-button-primary px-4 py-2 text-white font-medium rounded-lg text-sm agent-hover-lift"
                    >
                      Connect & Deploy Agent
                    </button>
                  )}
                </div>

                {/* Connection Stats */}
                {isConnected && (
                  <div className="mt-4 pt-4 border-t border-agent-border/30">
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div className="text-center">
                        <div className="agent-text-primary font-bold">{Math.floor(Math.random() * 800) + 300}</div>
                        <div className="text-gray-400">Agent Actions</div>
                      </div>
                      <div className="text-center">
                        <div className="agent-text-highlight font-bold">99.{Math.floor(Math.random() * 9) + 1}%</div>
                        <div className="text-gray-400">Success Rate</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Agent Orchestration Summary */}
        <div className="mt-12 agent-card rounded-xl p-8 text-center">
          <div className="text-4xl mb-4">🤖</div>
          <h2 className="text-2xl font-semibold agent-text-primary mb-4 agent-heading">
            Agent Orchestration Intelligence
          </h2>
          <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
            Your AI agent continuously monitors and optimizes integrations for maximum business efficiency. 
            Each connection enables sophisticated autonomous orchestration capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="agent-button-primary px-8 py-3 text-white font-semibold rounded-lg agent-hover-lift">
              View Agent Analytics
            </button>
            <button className="px-8 py-3 border-2 border-agent-accent text-agent-accent font-semibold rounded-lg hover:bg-agent-accent/10 transition-all duration-300 agent-border-glow">
              Configure Agent Behavior
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}