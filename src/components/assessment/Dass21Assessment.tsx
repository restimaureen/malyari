import React, { useState } from 'react'
import Button from '@/components/ui/Button'

const dass21Questions = [
  {
    category: 'depression',
    question: 'I found it hard to wind down',
    options: [
      'Did not apply to me at all',
      'Applied to me to some degree',
      'Applied to me to a considerable degree',
      'Applied to me very much'
    ]
  },
  {
    category: 'anxiety',
    question: 'I was aware of dryness of my mouth',
    options: [
      'Did not apply to me at all',
      'Applied to me to some degree',
      'Applied to me to a considerable degree',
      'Applied to me very much'
    ]
  },
  // More DASS-21 questions will be added here
]

export default function Dass21Assessment() {
  const [answers, setAnswers] = useState({})

  const handleAnswer = (questionIndex: number, value: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: value
    }))
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">DASS-21 Assessment</h2>
      <p className="text-gray-600">
        Please read each statement and select the answer that indicates how much the statement
        applied to you over the past week.
      </p>
      
      {dass21Questions.map((q, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-lg mb-4">{q.question}</p>
          <div className="space-y-2">
            {q.options.map((option, i) => (
              <label key={i} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={i}
                  onChange={(e) => handleAnswer(index, Number(e.target.value))}
                  className="text-emerald-600"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      ))}

      <Button 
        variant="primary"
        className="w-full"
        onClick={() => console.log(answers)}
      >
        Submit Assessment
      </Button>
    </div>
  )
}
