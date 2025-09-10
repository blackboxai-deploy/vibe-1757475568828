"use client"

import { useState, useEffect, useRef } from 'react'

interface Message {
  id: string
  type: 'user' | 'agent'
  content: string
  timestamp: Date
}

export default function ChatPage() {
  const [mounted, setMounted] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'agent',
      content: "Hello! I'm your APEX AI Agent - an advanced autonomous executive assistant. I can orchestrate complex workflows, manage your business platforms, and execute tasks intelligently. What would you like me to handle for you today?",
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isAgentProcessing, setIsAgentProcessing] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsAgentProcessing(true)

    // Agent response with enhanced AI
    setTimeout(async () => {
      try {
        const response = await fetch('/api/ai', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: userMessage.content,
            action: 'agent_chat'
          }),
        })

        const data = await response.json()
        
        const agentResponse: Message = {
          id: (Date.now() + 1).toString(),
          type: 'agent',
          content: data.success ? data.response : getAgentFallbackResponse(userMessage.content),
          timestamp: new Date()
        }
        
        setMessages(prev => [...prev, agentResponse])
      } catch (error) {
        const agentResponse: Message = {
          id: (Date.now() + 1).toString(),
          type: 'agent',
          content: getAgentFallbackResponse(userMessage.content),
          timestamp: new Date()
        }
        setMessages(prev => [...prev, agentResponse])
      } finally {
        setIsAgentProcessing(false)
      }
    }, 2000)
  }

  const getAgentFallbackResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()
    
    if (input.includes('email') || input.includes('draft')) {
      return "I'll autonomously manage your email workflows! My agent capabilities include:\n\n• **Intelligent Email Orchestration**: Analyze incoming emails and auto-categorize by priority\n• **Response Automation**: Draft responses matching your communication style\n• **Follow-up Sequences**: Autonomous follow-up campaigns based on recipient behavior\n• **Integration Sync**: Real-time synchronization with CRM and calendar systems\n\nWould you like me to configure autonomous email management for your accounts?"
    }
    
    if (input.includes('meeting') || input.includes('schedule')) {
      return "I'll handle comprehensive meeting orchestration as your AI agent:\n\n• **Calendar Intelligence**: Optimal scheduling across all participants\n• **Preparation Automation**: Auto-generate agendas, briefings, and materials\n• **Real-time Support**: Live meeting assistance with transcription and action items\n• **Follow-up Execution**: Automatic post-meeting task distribution and tracking\n\nMy agent can autonomously coordinate your entire meeting lifecycle. Shall I begin setup?"
    }
    
    return "As your APEX AI Agent, I can autonomously handle complex business operations across all your platforms. I excel at:\n\n🤖 **Autonomous Task Execution** - Complete workflows without supervision\n🔗 **Platform Orchestration** - Coordinate actions across multiple business systems\n📊 **Predictive Analytics** - Anticipate needs and optimize operations\n🧠 **Behavioral Learning** - Adapt to your style and preferences\n\nWhat specific area would you like me to take autonomous control of?"
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const agentActions = [
    { label: 'Autonomous Email Management', icon: '📧', action: () => setInputValue('Set up autonomous email management and orchestration') },
    { label: 'Platform Orchestration', icon: '🔗', action: () => setInputValue('Configure cross-platform workflow orchestration') },
    { label: 'Predictive Business Analytics', icon: '📊', action: () => setInputValue('Generate predictive analytics and business intelligence reports') },
    { label: 'Agent Workflow Design', icon: '⚙️', action: () => setInputValue('Design autonomous agent workflows for my business processes') }
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Agent Chat Header */}
        <div className="mb-8 animate-slide-up-gentle">
          <h1 className="text-4xl font-bold agent-text-primary mb-2 agent-heading">
            APEX AI Agent
          </h1>
          <p className="text-gray-400">
            Interact with your autonomous AI agent for sophisticated business orchestration and intelligent automation.
          </p>
        </div>

        {/* Agent Chat Interface */}
        <div className="flex flex-col h-[calc(100vh-12rem)] agent-glass rounded-xl overflow-hidden shadow-professional-deep">
          {/* Chat Header */}
          <div className="p-6 border-b border-agent-border/20 bg-agent-elevated/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-agent-accent to-agent-highlight rounded-xl flex items-center justify-center shadow-agent-glow">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white agent-heading">APEX AI Agent</h3>
                  <p className="text-sm text-gray-400">Online • Autonomous execution enabled</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 status-online-agent rounded-full"></div>
                <span className="text-xs text-gray-400">Agent active</span>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-3 ${
                  message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                {/* Avatar */}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  message.type === 'user' 
                    ? 'bg-agent-accent/20 border border-agent-accent/50' 
                    : 'bg-gradient-to-br from-agent-accent to-agent-highlight shadow-agent-glow'
                }`}>
                  {message.type === 'user' ? '👤' : '🤖'}
                </div>

                {/* Message Bubble */}
                <div className={`max-w-2xl px-4 py-3 rounded-2xl ${
                  message.type === 'user'
                    ? 'bg-agent-accent/20 border border-agent-accent/30 ml-auto'
                    : 'agent-glass-elevated'
                }`}>
                  <div className="text-white whitespace-pre-wrap">{message.content}</div>
                  <div className={`text-xs mt-2 ${
                    message.type === 'user' ? 'text-agent-accent/70' : 'text-gray-400'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}

            {/* Agent Processing Indicator */}
            {isAgentProcessing && (
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-agent-accent to-agent-highlight flex items-center justify-center shadow-agent-glow">
                  🤖
                </div>
                <div className="agent-glass-elevated px-4 py-3 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-agent-accent rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-agent-highlight rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-agent-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Agent Quick Actions */}
          {messages.length <= 1 && (
            <div className="p-4 border-t border-agent-border/20">
              <div className="flex flex-wrap gap-2 mb-4">
                {agentActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={action.action}
                    className="flex items-center space-x-2 px-3 py-2 bg-agent-elevated/50 hover:bg-agent-accent/10 border border-agent-border hover:border-agent-accent/50 rounded-lg transition-all text-sm agent-hover-lift"
                  >
                    <span>{action.icon}</span>
                    <span className="text-gray-300">{action.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Agent Input Area */}
          <div className="p-6 border-t border-agent-border/20 bg-agent-elevated/30">
            <div className="flex items-end space-x-4">
              <div className="flex-1 relative">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Communicate with your AI agent... (Enter to send, Shift+Enter for new line)"
                  className="w-full px-4 py-3 agent-input rounded-xl text-white placeholder-gray-400 resize-none focus:outline-none professional-input"
                  rows={1}
                  style={{ minHeight: '48px', maxHeight: '120px' }}
                />
              </div>
              
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isAgentProcessing}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  inputValue.trim() && !isAgentProcessing
                    ? 'agent-button-primary text-white agent-hover-lift'
                    : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                }`}
              >
                {isAgentProcessing ? '⏳' : '🚀'}
              </button>
            </div>
            
            <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
              <div className="flex items-center space-x-4">
                <span>🤖 Autonomous agent</span>
                <span>🔗 Platform orchestration</span>
                <span>🧠 Intelligent decision making</span>
              </div>
              <div>
                Agent trained • {Math.floor(Math.random() * 500) + 2000} behavioral patterns
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}