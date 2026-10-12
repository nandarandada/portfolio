import { useEffect } from 'react';

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} — Frosa` : 'Frosa — Fernanda Rosa';
  }, [title]);
}
