import { useState, useEffect } from 'react';

export function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    // Verifica se há preferência salva no localStorage
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      return JSON.parse(saved);
    }
    // Se não há preferência salva, usa a preferência do sistema
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Salva a preferência no localStorage
    localStorage.setItem('darkMode', JSON.stringify(isDark));
    
    // Aplica ou remove a classe 'dark' no elemento html
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDarkMode = () => setIsDark(!isDark);

  return { isDark, toggleDarkMode };
}