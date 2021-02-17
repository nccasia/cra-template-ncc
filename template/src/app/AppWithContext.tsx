import React, { Suspense } from "react";
import Theme from "./components/Theme";
import App from "./app/App";
import { Provider as ReduxProvider } from "react-redux";
import { ToastProvider } from "./components/Toasts";
import { AppConfigProvider } from "./components/AppConfig";
import { AuthProvider } from "./utils/auth/AuthContext";
import { HotkeyStorageProvider } from "./components/HotkeyStorage";
import AppErrorBoundary from "./components/AppErrorBoundary";

import Loading from "./components/Loading";

import configureStore from "./redux/configureStore";

const store = configureStore();

// Importing Internalization file
import "./i18n";

export const AppWithContexts = () => {
  return (
    <AppErrorBoundary>
      <ReduxProvider store={store}>
        <Suspense fallback={Loading}>
          <Theme>
            <AppConfigProvider>
              <AuthProvider>
                <ToastProvider>
                  <HotkeyStorageProvider>
                    <App />
                  </HotkeyStorageProvider>
                </ToastProvider>
              </AuthProvider>
            </AppConfigProvider>
          </Theme>
        </Suspense>
      </ReduxProvider>
    </AppErrorBoundary>
  );
};

export default AppWithContexts;
