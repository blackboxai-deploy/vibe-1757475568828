"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false)
  const [stats, setStats] = useState({
    agentTasks: 1547,
    autonomousHours: 203,
    platformsOrchestrated: 12,
    agentAccuracy: 97.8,
    predictiveScore: 94.2
  })

  useEffect(() => {
    setMounted(true)
    // Simulate real-time agent updates
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        agentTasks: prev.agentTasks + Math.floor(Math.random() * 8),
        autonomousHours: prev.autonomousHours + Math.random() * 0.2
      }))
    }, 8000)
    
    return () => clearInterval(interval)
  }, [])

  const agentActivities = [
    {
      type: 'autonomous',
      title: 'Multi-platform workflow orchestrated',
      description: 'Agent executed 34-step workflow across Salesforce, Office 365, and Slack',
      time: '2 minutes ago',
      icon: '🤖',
      status: 'success',
      impact: 'high'
    },
    {
      type: 'intelligence',
      title: 'Predictive analysis completed',
      description: 'Agent identified 5 optimization opportunities and scheduled implementations',
      time: '8 minutes ago',
      icon: '🧠',
      status: 'success',
      impact: 'high'
    },
    {
      type: 'orchestration',
      title: 'Cross-platform data synchronization',
      description: 'Real-time sync of 1,247 records across integrated business platforms',
      time: '15 minutes ago',
      icon: '🔗',
      status: 'processing',
      impact: 'medium'
    },
    {
      type: 'learning',
      title: 'Behavioral pattern adaptation',
      description: 'Agent refined decision-making models based on 156 new interaction patterns',
      time: '32 minutes ago',
      icon: '📈',
      status: 'success',
      impact: 'medium'
    },
    {
      type: 'automation',
      title: 'Executive email intelligence',
      description: 'Autonomously managed 28 email threads with 98.5% accuracy matching your style',
      time: '1 hour ago',
      icon: '📧',
      status: 'success',
      impact: 'high'
    }
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Agent Dashboard Header */}
        <div className="mb-8 animate-slide-up-gentle">
          <div className="flex items-center space-x-4 mb-4">
            <div className="relative w-16 h-16">
              <Image
                src="/apex-agent-logo.png"
                alt="APEX Agent Logo"
                fill
                className="object-contain agent-logo-glow"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold agent-text-primary agent-heading">
                APEX AGENT Dashboard
              </h1>
              <p className="text-gray-400">
                Your AI agent is orchestrating autonomous operations across your business ecosystem
              </p>
            </div>
          </div>
        </div>

        {/* Agent Performance Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <div className="agent-card rounded-xl p-6 hover:shadow-agent-glow transition-all animate-slide-up-gentle">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-gray-400 text-sm font-medium">Agent Tasks</h3>
              <span className="success-element text-sm font-semibold px-2 py-1 rounded">+31%</span>
            </div>
            <div className="text-3xl font-bold agent-text-primary">
              {stats.agentTasks.toLocaleString()}
            </div>
            <div className="mt-2 h-2 bg-agent-elevated rounded-full">
              <div className="h-2 bg-agent-accent rounded-full animate-pulse-agent" style={{ width: '84%' }}></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">Autonomous executions</p>
          </div>

          <div className="agent-card rounded-xl p-6 hover:shadow-agent-success transition-all animate-slide-up-gentle" style={{ animationDelay: '0.1s' }}>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-gray-400 text-sm font-medium">Autonomous Hours</h3>
              <span className="success-element text-sm font-semibold px-2 py-1 rounded">+24%</span>
            </div>
            <div className="text-3xl font-bold agent-text-highlight">
              {Math.round(stats.autonomousHours)}h
            </div>
            <div className="mt-2 h-2 bg-agent-elevated rounded-full">
              <div className="h-2 bg-agent-highlight rounded-full" style={{ width: '89%' }}></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">Independent operation</p>
          </div>

          <div className="agent-card rounded-xl p-6 hover:shadow-agent-warning transition-all animate-slide-up-gentle" style={{ animationDelay: '0.2s' }}>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-gray-400 text-sm font-medium">Platforms Orchestrated</h3>
              <span className="success-element text-sm font-semibold px-2 py-1 rounded">+4</span>
            </div>
            <div className="text-3xl font-bold text-agent-warning">
              {stats.platformsOrchestrated}
            </div>
            <div className="mt-2 h-2 bg-agent-elevated rounded-full">
              <div className="h-2 bg-agent-warning rounded-full" style={{ width: '92%' }}></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">Live integrations</p>
          </div>

          <div className="agent-card rounded-xl p-6 hover:shadow-agent-glow transition-all animate-slide-up-gentle" style={{ animationDelay: '0.3s' }}>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-gray-400 text-sm font-medium">Agent Accuracy</h3>
              <span className="success-element text-sm font-semibold px-2 py-1 rounded">+2.1%</span>
            </div>
            <div className="text-3xl font-bold agent-text-primary">
              {stats.agentAccuracy}%
            </div>
            <div className="mt-2 h-2 bg-agent-elevated rounded-full">
              <div className="h-2 bg-agent-accent rounded-full" style={{ width: '97%' }}></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">Decision precision</p>
          </div>

          <div className="agent-card rounded-xl p-6 hover:shadow-agent-success transition-all animate-slide-up-gentle" style={{ animationDelay: '0.4s' }}>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-gray-400 text-sm font-medium">Predictive Score</h3>
              <span className="success-element text-sm font-semibold px-2 py-1 rounded">+3.2%</span>
            </div>
            <div className="text-3xl font-bold agent-text-highlight">
              {stats.predictiveScore}%
            </div>
            <div className="mt-2 h-2 bg-agent-elevated rounded-full">
              <div className="h-2 bg-agent-highlight rounded-full" style={{ width: '94%' }}></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">Future insights</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Agent Activity Feed */}
          <div className="lg:col-span-2">
            <div className="agent-card rounded-xl p-6">
              <h2 className="text-2xl font-semibold agent-text-primary mb-6 agent-heading">Agent Activity Stream</h2>
              <div className="space-y-4">
                {agentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-agent-elevated/40 hover:bg-agent-elevated/60 transition-colors">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-lg shadow-agent-glow ${
                      activity.impact === 'high' ? 'bg-gradient-to-r from-agent-accent to-agent-highlight' :
                      'bg-gradient-to-r from-agent-accent/80 to-agent-secondary'
                    }`}>
                      {activity.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <h4 className="text-white font-medium">{activity.title}</h4>
                        <div className="flex items-center space-x-2">
                          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                            activity.status === 'success' ? 'success-element' :
                            activity.status === 'processing' ? 'status-processing-agent text-white' :
                            'warning-element'
                          }`}>
                            {activity.status}
                          </div>
                          <div className={`px-2 py-1 rounded text-xs ${
                            activity.impact === 'high' ? 'text-agent-highlight bg-agent-highlight/10' :
                            activity.impact === 'medium' ? 'text-agent-accent bg-agent-accent/10' :
                            'text-gray-400 bg-gray-500/10'
                          }`}>
                            {activity.impact}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm mt-1 leading-relaxed">{activity.description}</p>
                      <p className="text-gray-500 text-xs mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Agent Control Panel */}
          <div className="space-y-6">
            {/* Agent Status */}
            <div className="agent-card rounded-xl p-6">
              <h3 className="text-xl font-semibold agent-text-primary mb-4 agent-heading">Agent Core Status</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">Learning Engine</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-agent-elevated rounded-full h-2">
                      <div className="bg-agent-highlight h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                    <span className="agent-text-highlight text-sm font-semibold">92%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">Platform Orchestration</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-agent-elevated rounded-full h-2">
                      <div className="bg-agent-accent h-2 rounded-full" style={{ width: '96%' }}></div>
                    </div>
                    <span className="agent-text-primary text-sm font-semibold">96%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">Autonomous Processing</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-agent-elevated rounded-full h-2">
                      <div className="bg-agent-highlight h-2 rounded-full" style={{ width: '98%' }}></div>
                    </div>
                    <span className="agent-text-highlight text-sm font-semibold">98%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">Decision Intelligence</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-agent-elevated rounded-full h-2">
                      <div className="bg-agent-accent h-2 rounded-full" style={{ width: '94%' }}></div>
                    </div>
                    <span className="agent-text-primary text-sm font-semibold">94%</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 success-element p-3 rounded-lg border border-agent-highlight/30">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 status-online-agent rounded-full"></div>
                  <span className="text-agent-highlight text-sm font-medium">Agent executing autonomously</span>
                </div>
              </div>
            </div>

            {/* Agent Quick Controls */}
            <div className="agent-card rounded-xl p-6">
              <h3 className="text-xl font-semibold agent-text-primary mb-4 agent-heading">Agent Controls</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-3 rounded-lg bg-agent-accent/10 border border-agent-accent/30 hover:shadow-agent-glow transition-all text-left agent-hover-lift">
                  <span className="text-lg">🤖</span>
                  <div>
                    <div className="font-medium agent-text-primary">Deploy Agent</div>
                    <div className="text-xs text-gray-400">Launch autonomous tasks</div>
                  </div>
                </button>
                
                <button className="w-full flex items-center space-x-3 p-3 rounded-lg bg-agent-highlight/10 border border-agent-highlight/30 hover:shadow-agent-success transition-all text-left agent-hover-lift">
                  <span className="text-lg">⚙️</span>
                  <div>
                    <div className="font-medium agent-text-highlight">Configure Agent</div>
                    <div className="text-xs text-gray-400">Customize behavior</div>
                  </div>
                </button>
                
                <button className="w-full flex items-center space-x-3 p-3 rounded-lg bg-agent-warning/10 border border-agent-warning/30 hover:shadow-agent-warning transition-all text-left agent-hover-lift">
                  <span className="text-lg">📊</span>
                  <div>
                    <div className="font-medium text-agent-warning">Analytics Hub</div>
                    <div className="text-xs text-gray-400">Intelligence reports</div>
                  </div>
                </button>
                
                <button className="w-full flex items-center space-x-3 p-3 rounded-lg bg-agent-accent/10 border border-agent-accent/30 hover:shadow-agent-glow transition-all text-left agent-hover-lift">
                  <span className="text-lg">🔗</span>
                  <div>
                    <div className="font-medium agent-text-primary">Platform Orchestration</div>
                    <div className="text-xs text-gray-400">Manage integrations</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}