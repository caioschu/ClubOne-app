import React from 'react';
import { Toaster } from 'react-hot-toast';

const Toast: React.FC = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(24px)',
          color: 'white',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '24px',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          padding: '16px 20px',
          fontSize: '14px',
          fontWeight: '500'
        },
        success: {
          iconTheme: {
            primary: '#10b981',
            secondary: 'white',
          },
          style: {
            border: '1px solid rgba(16, 185, 129, 0.3)',
            boxShadow: '0 0 40px rgba(16, 185, 129, 0.3)',
          }
        },
        error: {
          iconTheme: {
            primary: '#ef4444',
            secondary: 'white',
          },
          style: {
            border: '1px solid rgba(239, 68, 68, 0.3)',
            boxShadow: '0 0 40px rgba(239, 68, 68, 0.3)',
          }
        },
        loading: {
          iconTheme: {
            primary: '#8b5cf6',
            secondary: 'white',
          },
          style: {
            border: '1px solid rgba(139, 92, 246, 0.3)',
            boxShadow: '0 0 40px rgba(139, 92, 246, 0.3)',
          }
        },
      }}
    />
  );
};

export default Toast;