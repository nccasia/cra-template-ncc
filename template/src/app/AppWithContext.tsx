import React, { Suspense } from 'react';
import Theme from '../components/Theme';
import App from './App';
import { Provider as ReduxProvider } from 'react-redux';
import { ToastProvider } from '../components/Toasts';
import { AppConfigProvider } from '../components/AppConfig';
import { AuthProvider } from '../core/auth/AuthContext';
import AppErrorBoundary from '../components/AppErrorBoundary';

import Loading from '../components/Loading';

import { store } from '../core/redux/store';

// Importing Internalization file
import './i18n';

export const AppWithContexts = () => {
  return (
    <AppErrorBoundary>
      <ReduxProvider store={store}>
        <AppConfigProvider>
          <Suspense fallback={Loading}>
            <Theme>
              <AuthProvider>
                <ToastProvider>
                  <App />
                </ToastProvider>
              </AuthProvider>
            </Theme>
          </Suspense>
        </AppConfigProvider>
      </ReduxProvider>
    </AppErrorBoundary>
  );
};

export default AppWithContexts;
