'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const themes = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'blue', label: 'Blue' },
    { value: 'green', label: 'Green' }
  ];

  return (
    <div className="fixed top-4 right-4 z-50 p-2 rounded bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors">
      <label htmlFor="theme-select" className="mr-2 font-semibold">Theme:</label>
      <select
        id="theme-select"
        value={theme}
        onChange={e => setTheme(e.target.value)}
        className="p-1 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
      >
        {themes.map(t => (
          <option key={t.value} value={t.value}>{t.label}</option>
        ))}
      </select>
    </div>
  );
}