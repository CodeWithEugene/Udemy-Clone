import { useState, useEffect } from 'react';

const getCurrentPath = () => window.location.hash.substring(1) || '/';

export const useRouter = () => {
  const [path, setPath] = useState(getCurrentPath());

  useEffect(() => {
    const onHashChange = () => {
      setPath(getCurrentPath());
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return path;
};