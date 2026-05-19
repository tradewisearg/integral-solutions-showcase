// Hook: aplica fade-in/fade-out cuando el elemento entra o sale del viewport.
import { useCallback, useEffect, useState } from "react";

export function useReveal<T extends HTMLElement>(threshold = 0.15) {
  const [visible, setVisible] = useState(false);
  const [node, setNode] = useState<T | null>(null);

  const ref = useCallback((element: T | null) => {
    setNode(element);
  }, []);

  useEffect(() => {
    if (!node) {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin: "0px 0px -20% 0px",
      },
    );

    io.observe(node);
    return () => io.disconnect();
  }, [node, threshold]);

  return { ref, visible } as const;
}
