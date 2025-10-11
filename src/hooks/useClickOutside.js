import { useEffect } from 'react';

export function useClickOutside(isOpen, onClose, className) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      if (isOpen && !target.closest(`.${className}`)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose, className]);
}
