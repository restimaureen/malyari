import React from 'react'
import { useChat } from 'ai/react'
import Button from '@/components/ui/Button'

export default function ChatInterface() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-lg shadow-sm">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(m => (
          <div
            key={m.id}
            className={`${
              m.role === 'user' ? 'bg-emerald-50' : 'bg-gray-50'
            } p-4 rounded-lg`}
          >
            {m.content}
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex space-x-2">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <Button type="submit">Send</Button>
        </div>
      </form>
    </div>
  )
}
