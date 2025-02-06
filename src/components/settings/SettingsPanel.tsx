import React, { useState } from 'react'
import Button from '@/components/ui/Button'

export default function SettingsPanel() {
  const [settings, setSettings] = useState({
    notifications: true,
    emailUpdates: false,
    darkMode: false,
    language: 'english'
  })

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Settings</h2>
      
      <div className="space-y-6">
        {/* Notifications */}
        <div>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={settings.notifications}
              onChange={(e) => setSettings(prev => ({
                ...prev,
                notifications: e.target.checked
              }))}
              className="h-4 w-4 text-emerald-600"
            />
            <span>Enable Push Notifications</span>
          </label>
        </div>

        {/* Email Updates */}
        <div>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={settings.emailUpdates}
              onChange={(e) => setSettings(prev => ({
                ...prev,
                emailUpdates: e.target.checked
              }))}
              className="h-4 w-4 text-emerald-600"
            />
            <span>Receive Email Updates</span>
          </label>
        </div>

        {/* Language Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Language</label>
          <select
            value={settings.language}
            onChange={(e) => setSettings(prev => ({
              ...prev,
              language: e.target.value
            }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          >
            <option value="english">English</option>
            <option value="filipino">Filipino</option>
          </select>
        </div>

        <Button 
          variant="primary"
          onClick={() => console.log('Saving settings:', settings)}
        >
          Save Settings
        </Button>
      </div>
    </div>
  )
}
