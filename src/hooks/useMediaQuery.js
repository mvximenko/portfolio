import { useState, useEffect } from 'react';

const useMediaQuery = () => {
  const [mQuery, setMQuery] = useState({
    matches: window.innerWidth > 768 ? true : false,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    mediaQuery.addEventListener('change', setMQuery);
    return () => mediaQuery.removeEventListener('change', setMQuery);
  }, []);

  return mQuery;
};

export default useMediaQuery;
