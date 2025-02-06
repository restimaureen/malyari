import React from 'react'
import Button from '@/components/ui/Button'

interface UserProfileProps {
  user: {
    name: string
    email: string
    age?: number
    gender?: string
    location?: string
  }
}

export default function UserProfile({ user }: UserProfileProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Profile</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <p className="mt-1 text-gray-900">{user.name}</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <p className="mt-1 text-gray-900">{user.email}</p>
        </div>

        {user.age && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Age</label>
            <p className="mt-1 text-gray-900">{user.age}</p>
          </div>
        )}

        {user.gender && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <p className="mt-1 text-gray-900">{user.gender}</p>
          </div>
        )}

        {user.location && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <p className="mt-1 text-gray-900">{user.location}</p>
          </div>
        )}
      </div>

      <div className="mt-6">
        <Button variant="secondary">Edit Profile</Button>
      </div>
    </div>
  )
}
