import React from 'react';
import { GithubIcon } from 'lucide-react';

export function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <GithubIcon className="w-16 h-16 text-gray-800 dark:text-gray-200 mb-6" />
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Welcome to Your App
      </h1>
      <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl">
        This app is set up with React Query for API calls, React Router for navigation,
        and Jotai for state management. Check out the Todos page to see it in action!
      </p>
    </div>
  );
}