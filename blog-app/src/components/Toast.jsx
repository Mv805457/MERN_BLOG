import { useState, useEffect } from 'react';

let toastHandler = null;

export function useToast() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    toastHandler = (message, type = 'success') => {
      const id = Date.now();
      setToasts(prev => [...prev, { id, message, type }]);
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id));
      }, 3000);
    };
  }, []);

  return toasts;
}

export function toast(message, type = 'success') {
  if (toastHandler) {
    toastHandler(message, type);
  }
}

export default function Toast({ toasts }) {
  return (
    <div className="toast-wrap">
      {toasts.map(toast => (
        <div 
          key={toast.id} 
          className={`toast ${toast.type === 'error' ? 'toast-error' : ''}`}
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
}
