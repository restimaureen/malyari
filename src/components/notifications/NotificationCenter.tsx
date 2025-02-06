import React from 'react'

interface Notification {
  id: string
  title: string
  message: string
  type: 'assessment' | 'reminder' | 'update'
  date: string
  read: boolean
}

const sampleNotifications: Notification[] = [
  {
    id: '1',
    title: 'Weekly Assessment Due',
    message: 'Time for your weekly well-being check-in!',
    type: 'assessment',
    date: '2024-02-06',
    read: false
  },
  // Add more sample notifications
]

export default function NotificationCenter() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Notifications</h2>
      
      <div className="space-y-4">
        {sampleNotifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 rounded-lg ${
              notification.read ? 'bg-gray-50' : 'bg-emerald-50'
            }`}
          >
            <h3 className="font-medium text-gray-900">{notification.title}</h3>
            <p className="text-gray-600 mt-1">{notification.message}</p>
            <p className="text-sm text-gray-500 mt-2">{notification.date}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
