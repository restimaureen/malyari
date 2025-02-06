import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

interface ProgressData {
  date: string
  permaScore: number
  dassScore: number
}

const sampleData: ProgressData[] = [
  { date: '2024-01-01', permaScore: 75, dassScore: 25 },
  { date: '2024-02-01', permaScore: 78, dassScore: 22 },
  { date: '2024-03-01', permaScore: 82, dassScore: 20 }
]

export default function ProgressTracker() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Progress</h2>
      
      <div className="h-[400px] w-full">
        <LineChart
          width={800}
          height={400}
          data={sampleData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="permaScore" 
            stroke="#10B981" 
            name="PERMA Score" 
          />
          <Line 
            type="monotone" 
            dataKey="dassScore" 
            stroke="#EF4444" 
            name="DASS-21 Score" 
          />
        </LineChart>
      </div>
    </div>
  )
}
