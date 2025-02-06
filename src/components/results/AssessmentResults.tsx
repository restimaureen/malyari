import React from 'react'
import Button from '@/components/ui/Button'

interface AssessmentResultsProps {
  permaResults: {
    positive: number
    engagement: number
    relationships: number
    meaning: number
    accomplishment: number
  }
  dassResults: {
    depression: number
    anxiety: number
    stress: number
  }
}

export default function AssessmentResults({ permaResults, dassResults }: AssessmentResultsProps) {
  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-4">PERMA Assessment Results</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-600">Positive Emotions</p>
            <div className="h-2 bg-gray-200 rounded">
              <div 
                className="h-2 bg-emerald-500 rounded"
                style={{ width: `${permaResults.positive}%` }}
              />
            </div>
          </div>
          {/* Repeat for other PERMA dimensions */}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-4">DASS-21 Results</h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-gray-600">Depression</p>
            <div className="h-2 bg-gray-200 rounded">
              <div 
                className="h-2 bg-red-500 rounded"
                style={{ width: `${dassResults.depression}%` }}
              />
            </div>
          </div>
          {/* Repeat for anxiety and stress */}
        </div>
      </div>

      <Button variant="primary" className="w-full">
        Get Personalized Recommendations
      </Button>
    </div>
  )
}
