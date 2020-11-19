import { useState, useEffect, useCallback } from 'react';

const isDesktop = () => {
  return window.innerWidth > 768 ? true : false;
};

const useMediaQuery = () => {
  const [mQuery, setMQuery] = useState(isDesktop());
  const handleResize = useCallback(() => setMQuery(isDesktop()), []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return mQuery;
};

export default useMediaQuery;
