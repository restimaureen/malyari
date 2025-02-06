import React from 'react'

interface RecommendationCardProps {
  title: string
  description: string
  category: 'perma' | 'cbt' | 'lifestyle'
  actionItems: string[]
}

export default function RecommendationCard({
  title,
  description,
  category,
  actionItems
}: RecommendationCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="space-y-2">
        <h4 className="font-medium text-gray-900">Action Items:</h4>
        <ul className="list-disc pl-5 space-y-1">
          {actionItems.map((item, index) => (
            <li key={index} className="text-gray-600">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
