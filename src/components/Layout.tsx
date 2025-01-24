import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useAtom } from 'jotai';
import { Sun, Moon, Home, ListTodo, Users, MessageSquare, Settings, Menu, X } from 'lucide-react';
import { themeAtom, mobileMenuAtom } from '@/lib/atoms';
import { BackToTop } from './BackToTop';

export function Layout() {
  const [theme, setTheme] = useAtom(themeAtom);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useAtom(mobileMenuAtom);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navigationItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/todos', icon: ListTodo, label: 'Tasks' },
    { path: '/team', icon: Users, label: 'Team' },
    { path: '/messages', icon: MessageSquare, label: 'Messages' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  const NavLink = ({ path, icon: Icon, label }: { path: string; icon: any; label: string }) => (
    <Link 
      to={path} 
      className={`flex items-center px-3 py-2 text-sm md:text-base ${
        isActive(path) 
          ? 'text-indigo-600 dark:text-indigo-400' 
          : 'text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400'
      }`}
      onClick={() => setIsMobileMenuOpen(false)}
    >
      <Icon className="w-5 h-5 mr-1.5" />
      <span className="md:hidden lg:inline">{label}</span>
    </Link>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              {navigationItems.map((item) => (
                <NavLink key={item.path} {...item} />
              ))}
            </div>
            
            <div className="flex items-center">
              <button
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                ) : (
                  <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200 dark:border-gray-700">
            {navigationItems.map((item) => (
              <NavLink key={item.path} {...item} />
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <Outlet />
      </main>

      <BackToTop />
    </div>
  );
}