import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Cuando cambia la ruta, siempre subir arriba
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Si hay un hash (#productos)
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        // Espera un tick para asegurarse que el render esté completo
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
      }
    }
  }, [hash]);

  return null;
}
