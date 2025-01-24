import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import { api } from '@/lib/api';

export function Todos() {
  const { data: todos, isLoading, error } = useQuery({
    queryKey: ['todos'],
    queryFn: api.getTodos
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center">
        Error loading todos: {error.message}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Todos</h1>
      <div className="grid gap-4">
        {todos.map((todo: any) => (
          <div
            key={todo.id}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
          >
            <div className="flex items-start gap-4">
              <input
                type="checkbox"
                checked={todo.completed}
                readOnly
                className="mt-1"
              />
              <span className={`text-gray-700 dark:text-gray-200 ${
                todo.completed ? 'line-through' : ''
              }`}>
                {todo.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}