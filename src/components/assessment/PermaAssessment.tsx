import React, { useState } from 'react'
import Button from '@/components/ui/Button'

const permaQuestions = [
  {
    category: 'positive',
    question: 'In general, how often do you feel joyful?',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always']
  },
  {
    category: 'engagement',
    question: 'How often do you become absorbed in what you are doing?',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always']
  },
  // Add more PERMA questions
]

export default function PermaAssessment() {
  const [answers, setAnswers] = useState({})

  const handleAnswer = (category: string, value: number) => {
    setAnswers(prev => ({
      ...prev,
      [category]: value
    }))
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">PERMA Assessment</h2>
      {permaQuestions.map((q, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-lg mb-4">{q.question}</p>
          <div className="space-y-2">
            {q.options.map((option, i) => (
              <label key={i} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name={q.category}
                  value={i + 1}
                  onChange={(e) => handleAnswer(q.category, Number(e.target.value))}
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
