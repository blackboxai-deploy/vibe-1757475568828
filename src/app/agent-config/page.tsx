"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function AgentConfigPage() {
  const [mounted, setMounted] = useState(false)
  const [agentConfig, setAgentConfig] = useState({
    autonomyLevel: 'high',
    decisionThreshold: 0.85,
    learningRate: 0.7,
    responseStyle: 'professional',
    integrationDepth: 'full',
    predictionHorizon: '30days'
  })

  const [activeSection, setActiveSection] = useState('general')

  useEffect(() => {
    setMounted(true)
  }, [])

  const autonomyLevels = [
    {
      id: 'low',
      name: 'Supervised Agent',
      description: 'Agent drafts actions for your approval before execution',
      risk: 'Minimal',
      efficiency: '60%'
    },
    {
      id: 'medium', 
      name: 'Semi-Autonomous Agent',
      description: 'Agent executes routine tasks, escalates complex decisions',
      risk: 'Low',
      efficiency: '80%'
    },
    {
      id: 'high',
      name: 'Autonomous Agent',
      description: 'Agent independently manages 90% of operations',
      risk: 'Medium',
      efficiency: '95%'
    },
    {
      id: 'full',
      name: 'Fully Autonomous Agent',
      description: 'Complete autonomous operation with periodic reports',
      risk: 'Managed',
      efficiency: '98%'
    }
  ]

  const configSections = [
    { id: 'general', label: 'General Settings', icon: '⚙️' },
    { id: 'behavior', label: 'Agent Behavior', icon: '🤖' },
    { id: 'learning', label: 'Learning & Adaptation', icon: '🧠' },
    { id: 'orchestration', label: 'Platform Orchestration', icon: '🔗' },
    { id: 'security', label: 'Security & Privacy', icon: '🔒' },
    { id: 'advanced', label: 'Advanced Agent Features', icon: '⚡' }
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Agent Config Header */}
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
                Agent Configuration
              </h1>
              <p className="text-gray-400">
                Customize your AI agent's behavior, autonomy level, and operational parameters
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Configuration Sidebar */}
          <div className="lg:col-span-1">
            <div className="agent-card rounded-xl p-6">
              <h3 className="text-lg font-semibold agent-text-primary mb-4 agent-heading">Configuration Areas</h3>
              <div className="space-y-2">
                {configSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-all duration-300 ${
                      activeSection === section.id
                        ? 'bg-agent-accent/20 border border-agent-accent/50 agent-text-primary'
                        : 'text-gray-300 hover:text-agent-accent hover:bg-agent-accent/5 agent-hover-lift'
                    }`}
                  >
                    <span className="text-lg">{section.icon}</span>
                    <div>
                      <div className="font-medium">{section.label}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Configuration Content */}
          <div className="lg:col-span-3">
            {activeSection === 'general' && (
              <div className="space-y-6">
                <div className="agent-card rounded-xl p-6">
                  <h3 className="text-2xl font-semibold agent-text-primary mb-6 agent-heading">General Agent Settings</h3>
                  
                  {/* Autonomy Level Configuration */}
                  <div className="mb-8">
                    <h4 className="text-lg font-medium agent-text-highlight mb-4">Agent Autonomy Level</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {autonomyLevels.map((level) => (
                        <button
                          key={level.id}
                          onClick={() => setAgentConfig(prev => ({ ...prev, autonomyLevel: level.id }))}
                          className={`p-4 rounded-xl border text-left transition-all duration-300 agent-hover-lift ${
                            agentConfig.autonomyLevel === level.id
                              ? 'border-agent-accent/50 bg-agent-accent/10 agent-border-glow'
                              : 'border-agent-border/30 hover:border-agent-accent/30'
                          }`}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h5 className="font-semibold text-white">{level.name}</h5>
                            <div className={`px-2 py-1 rounded text-xs ${
                              level.risk === 'Minimal' ? 'success-element' :
                              level.risk === 'Low' ? 'text-agent-highlight bg-agent-highlight/10' :
                              level.risk === 'Medium' ? 'warning-element' :
                              'text-agent-accent bg-agent-accent/10'
                            }`}>
                              {level.risk} Risk
                            </div>
                          </div>
                          <p className="text-gray-300 text-sm mb-2">{level.description}</p>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-400">Efficiency:</span>
                            <span className="text-sm agent-text-primary font-medium">{level.efficiency}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Decision Threshold */}
                  <div className="mb-8">
                    <h4 className="text-lg font-medium agent-text-highlight mb-4">Decision Confidence Threshold</h4>
                    <div className="agent-glass-elevated rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Minimum confidence for autonomous decisions</span>
                        <span className="agent-text-primary font-semibold">{Math.round(agentConfig.decisionThreshold * 100)}%</span>
                      </div>
                      <input
                        type="range"
                        min="0.5"
                        max="0.98"
                        step="0.01"
                        value={agentConfig.decisionThreshold}
                        onChange={(e) => setAgentConfig(prev => ({ ...prev, decisionThreshold: parseFloat(e.target.value) }))}
                        className="w-full h-2 bg-agent-elevated rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #4a90e2 0%, #4a90e2 ${agentConfig.decisionThreshold * 100}%, #2d3748 ${agentConfig.decisionThreshold * 100}%, #2d3748 100%)`
                        }}
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>Conservative (50%)</span>
                        <span>Optimal ({Math.round(agentConfig.decisionThreshold * 100)}%)</span>
                        <span>Aggressive (98%)</span>
                      </div>
                    </div>
                  </div>

                  {/* Learning Rate */}
                  <div className="mb-6">
                    <h4 className="text-lg font-medium agent-text-highlight mb-4">Agent Learning Rate</h4>
                    <div className="agent-glass-elevated rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Speed of behavioral adaptation</span>
                        <span className="agent-text-highlight font-semibold">{Math.round(agentConfig.learningRate * 100)}%</span>
                      </div>
                      <input
                        type="range"
                        min="0.1"
                        max="1.0"
                        step="0.1"
                        value={agentConfig.learningRate}
                        onChange={(e) => setAgentConfig(prev => ({ ...prev, learningRate: parseFloat(e.target.value) }))}
                        className="w-full h-2 bg-agent-elevated rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #00d4aa 0%, #00d4aa ${agentConfig.learningRate * 100}%, #2d3748 ${agentConfig.learningRate * 100}%, #2d3748 100%)`
                        }}
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>Gradual (10%)</span>
                        <span>Optimal ({Math.round(agentConfig.learningRate * 100)}%)</span>
                        <span>Rapid (100%)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'behavior' && (
              <div className="agent-card rounded-xl p-6">
                <h3 className="text-2xl font-semibold agent-text-primary mb-6 agent-heading">Agent Behavior Configuration</h3>
                <div className="text-center py-12 text-gray-400">
                  <div className="text-6xl mb-4">🤖</div>
                  <p className="text-lg">Agent behavior configuration coming in next update</p>
                  <p className="text-sm">Advanced behavioral parameters and decision-making customization</p>
                </div>
              </div>
            )}

            {/* Additional sections would be implemented similarly */}
            {activeSection !== 'general' && activeSection !== 'behavior' && (
              <div className="agent-card rounded-xl p-6">
                <h3 className="text-2xl font-semibold agent-text-primary mb-6 agent-heading">
                  {configSections.find(s => s.id === activeSection)?.label}
                </h3>
                <div className="text-center py-12 text-gray-400">
                  <div className="text-6xl mb-4">
                    {configSections.find(s => s.id === activeSection)?.icon}
                  </div>
                  <p className="text-lg">Advanced configuration panel coming in next update</p>
                  <p className="text-sm">Enterprise-grade {activeSection} settings and controls</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Save Configuration */}
        <div className="mt-8 flex justify-center">
          <button className="agent-button-primary px-8 py-3 text-white font-semibold rounded-xl agent-hover-lift">
            Deploy Agent Configuration
          </button>
        </div>
      </div>
    </div>
  )
}