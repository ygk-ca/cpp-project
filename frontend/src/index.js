import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProjectsContextProvider } from './context/ProjectContext';
import ErrorBoundary from './context/ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ErrorBoundary>
    <ProjectsContextProvider> */}
    <App />
    {/* </ProjectsContextProvider>
    </ErrorBoundary> */}
    
  </React.StrictMode>
);


