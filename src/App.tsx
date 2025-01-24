import React from 'react';
import { GithubIcon } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full">
        <div className="flex items-center justify-center mb-6">
          <GithubIcon className="w-12 h-12 text-gray-800" />
        </div>
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          React + TypeScript + Vite
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Your project is set up with absolute imports! Try using <code className="bg-gray-100 px-2 py-1 rounded">@/components</code> in your imports.
        </p>
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <h2 className="font-semibold text-gray-700 mb-2">Features:</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Absolute imports configured</li>
              <li>TypeScript support</li>
              <li>Tailwind CSS styling</li>
              <li>ESLint configuration</li>
              <li>Lucide React icons</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;