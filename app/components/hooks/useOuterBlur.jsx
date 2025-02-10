import { useEffect, useRef } from 'react';

function useOuterBlur(ref) {
  const overlayRef = useRef(null);

  useEffect(() => {
    if (overlayRef.current && ref.current) {
      const { width, height, top, left } = ref.current.getBoundingClientRect();
      
      // Set the overlay to cover the div and apply the blur
      overlayRef.current.style.position = 'absolute';
      overlayRef.current.style.top = `${top}px`;
      overlayRef.current.style.left = `${left}px`;
      overlayRef.current.style.width = `${width}px`;
      overlayRef.current.style.height = `${height}px`;
      overlayRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Optional dark overlay
      overlayRef.current.style.filter = 'blur(10px)'; // Adjust blur intensity
    }
  }, [ref]);

  return overlayRef;
}

export default useOuterBlur;
