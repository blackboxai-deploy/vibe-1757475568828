"use client"

import { useState, useEffect } from 'react'

export default function KnowledgeBasePage() {
  const [mounted, setMounted] = useState(false)
  const [agentStats, setAgentStats] = useState({
    documentsProcessed: 1847,
    patternsLearned: 2156,
    behavioralAdaptations: 89,
    intelligenceScore: 94.7
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-slide-up-gentle">
          <h1 className="text-4xl font-bold agent-text-primary mb-2 agent-heading">
            Agent Knowledge Base
          </h1>
          <p className="text-gray-400">
            Train your AI agent with documents, communications, and behavioral patterns for enhanced autonomous operation.
          </p>
        </div>

        {/* Agent Learning Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="agent-card rounded-xl p-6 hover:shadow-agent-glow transition-all">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-400 text-sm font-medium">Documents Processed</h3>
              <span className="text-2xl">📚</span>
            </div>
            <div className="text-3xl font-bold agent-text-primary">
              {agentStats.documentsProcessed.toLocaleString()}
            </div>
            <p className="text-xs text-gray-500 mt-1">+67 this week</p>
          </div>

          <div className="agent-card rounded-xl p-6 hover:shadow-agent-success transition-all">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-400 text-sm font-medium">Patterns Learned</h3>
              <span className="text-2xl">🧠</span>
            </div>
            <div className="text-3xl font-bold agent-text-highlight">
              {agentStats.patternsLearned.toLocaleString()}
            </div>
            <p className="text-xs text-gray-500 mt-1">+203 today</p>
          </div>

          <div className="agent-card rounded-xl p-6 hover:shadow-agent-warning transition-all">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-400 text-sm font-medium">Behavioral Adaptations</h3>
              <span className="text-2xl">⚙️</span>
            </div>
            <div className="text-3xl font-bold text-agent-warning">{agentStats.behavioralAdaptations}</div>
            <p className="text-xs text-gray-500 mt-1">Active adaptations</p>
          </div>

          <div className="agent-card rounded-xl p-6 hover:shadow-agent-glow transition-all">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-400 text-sm font-medium">Intelligence Score</h3>
              <span className="text-2xl">🎯</span>
            </div>
            <div className="text-3xl font-bold agent-text-primary">{agentStats.intelligenceScore}%</div>
            <p className="text-xs text-gray-500 mt-1">+2.3% improvement</p>
          </div>
        </div>

        {/* Agent Training Interface */}
        <div className="agent-card rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold agent-text-primary mb-6 agent-heading text-center">
            Agent Training Interface
          </h2>
          <div className="text-center py-12">
            <div className="text-6xl mb-6">🤖</div>
            <h3 className="text-xl font-semibold agent-text-highlight mb-4">
              Advanced Agent Learning System
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Upload documents, emails, and communication patterns to enhance your agent's understanding 
              of your business context and decision-making preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="agent-button-primary px-8 py-3 text-white font-semibold rounded-xl agent-hover-lift">
                Upload Training Data
              </button>
              <button className="agent-button-secondary px-8 py-3 text-white font-semibold rounded-xl agent-hover-lift">
                Import Email Archive
              </button>
            </div>
          </div>
        </div>

        {/* Agent Learning Insights */}
        <div className="agent-card rounded-xl p-6">
          <h2 className="text-2xl font-semibold agent-text-primary mb-6 agent-heading">Agent Learning Insights</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold agent-text-highlight mb-4">Communication Intelligence</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Executive Communication Style</span>
                  <span className="agent-text-primary font-semibold">92%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Technical Accuracy</span>
                  <span className="agent-text-highlight font-semibold">96%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Decision Pattern Recognition</span>
                  <span className="text-agent-warning font-semibold">89%</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold agent-text-highlight mb-4">Operational Intelligence</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Workflow Optimization</span>
                  <span className="agent-text-primary font-semibold">94%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Platform Coordination</span>
                  <span className="agent-text-highlight font-semibold">91%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Predictive Accuracy</span>
                  <span className="text-agent-warning font-semibold">87%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}