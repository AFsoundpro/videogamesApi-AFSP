// ScrollToTop.jsx
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Este componente no renderiza nada en la interfaz de usuario
}

export default ScrollToTop;
