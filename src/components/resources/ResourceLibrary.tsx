import React from 'react'
import Button from '@/components/ui/Button'

interface Resource {
  id: string
  title: string
  description: string
  category: 'article' | 'video' | 'exercise' | 'guide'
  tags: string[]
}

const resources: Resource[] = [
  {
    id: '1',
    title: 'Understanding the PERMA Model',
    description: 'Learn about the five elements of well-being in the PERMA model.',
    category: 'article',
    tags: ['PERMA', 'well-being', 'positive psychology']
  },
  {
    id: '2',
    title: 'Quick Stress Relief Techniques',
    description: 'Simple exercises for managing stress in college.',
    category: 'exercise',
    tags: ['stress', 'coping', 'exercises']
  }
]

export default function ResourceLibrary() {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Resource Library</h2>
        
        {/* Search and Filters */}
        <div className="mb-6">
          <input
            type="search"
            placeholder="Search resources..."
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        {/* Resource Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-medium text-gray-900">{resource.title}</h3>
              <p className="text-gray-600 mt-2">{resource.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {resource.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-emerald-100 text-emerald-800 text-sm px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Button
                variant="secondary"
                className="mt-4 w-full"
              >
                View Resource
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
