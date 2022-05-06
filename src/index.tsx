import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Policies from './Policies';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/privacy" element={<Policies isPrivacy={true} />} />
      <Route path="/terms" element={<Policies isPrivacy={false} />} />
      <Route
        path="*"
        element={<Navigate to="/" replace />}/>
    </Routes>
  </BrowserRouter>
);