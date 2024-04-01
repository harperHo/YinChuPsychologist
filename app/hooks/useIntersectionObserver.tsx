import React, { useRef, useCallback, useState, useEffect } from "react";

const useIntersectionObserver = (options) => {
  const ref = useRef(null);
  const { root = null, rootMargin = "0px", threshold = 1 } = options;
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  const callback = useCallback(
    (entries) => {
      const [entry] = entries;

      if (entry) {
        setIsIntersecting(entry?.isIntersecting || false);

        if (!hasShown && entry?.isIntersecting) {
          setHasShown(true);
        }
      }
    },
    [hasShown]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      root,
      rootMargin,
      threshold,
    });

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [root, rootMargin, threshold]);

  return {
    ref,
    isIntersecting,
    hasShown,
  };
};

export default useIntersectionObserver;
